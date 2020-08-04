import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import classNames from 'classnames';
import { VIEWPORT } from './constants';
import './map.scss';

export const MapAddEditPointComponent = ({
  width,
  height,
  zoom,
  coordinatesMarker,
  setCoordinatesMarker,
  nameMarker,
}) => {
  const { latitude, longitude } = coordinatesMarker || VIEWPORT;
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
  });
  const [position, setPosition] = useState({
    longitude,
    latitude,
  });
  const onDragEnd = ({ lngLat }) => {
    const newCoordinates = { longitude: lngLat[0], latitude: lngLat[1] };
    setPosition(newCoordinates);
    setCoordinatesMarker(newCoordinates);
  };

  return (
    <div>
      <ReactMapGL
        width={width}
        height={height}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        {...viewport}
      >
        <Marker longitude={position.longitude} latitude={position.latitude} onDragEnd={onDragEnd} draggable>
          <div className={classNames('map-marker')}>{nameMarker || 1}</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

MapAddEditPointComponent.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  zoom: PropTypes.number,
  coordinatesMarker: PropTypes.object,
  setCoordinatesMarker: PropTypes.func,
  nameMarker: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
