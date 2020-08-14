import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import CSSModules from 'react-css-modules';

import styles from './map-add-edit-point-component.module.scss';

const MapAddEditPointComponent = ({
  width,
  height,
  zoom,
  coordinatesMarker,
  setCoordinatesMarker,
  nameMarker,
}) => {
  
  const { latitude, longitude } = coordinatesMarker;

  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
  });

  const [position, setPosition] = useState({
    latitude,
    longitude,
  });
  
  useEffect(() => {
    setPosition({
      latitude,
      longitude
    });
    setViewport({
      latitude,
      longitude,
      zoom
    })
  }, [coordinatesMarker, latitude, longitude, zoom]);

  const onDragEnd = ({ lngLat }) => {
    const newCoordinates = { longitude: lngLat[0], latitude: lngLat[1] };
    setPosition(newCoordinates);
    setCoordinatesMarker(newCoordinates);
  };

  return (
    <>
      <ReactMapGL
        width={width}
        height={height}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        {...viewport}
      >
        <Marker longitude={position.longitude} latitude={position.latitude} onDragEnd={onDragEnd} draggable>
          <div styleName='map-marker'></div>
        </Marker>
      </ReactMapGL>
    </>
  );
};

MapAddEditPointComponent.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  zoom: PropTypes.number,
  coordinatesMarker: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setCoordinatesMarker: PropTypes.func,
  nameMarker: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CSSModules(MapAddEditPointComponent, styles);