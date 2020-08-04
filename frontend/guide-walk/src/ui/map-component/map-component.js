import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import classNames from 'classnames';
import { VIEWPORT } from './constants';
import './map.scss';

export const MapComponent = ({ width, height, zoom, coordinatesMarker }) => {
  // const { lng, lat } = coordinatesMarker;
  const { latitude, longitude } = VIEWPORT;
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
  });
  const [markers, setMatkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleOnClick = (e) => {
    const coordinates = e.lngLat;

    setMatkers((prevState) => {
      const validateCoordinates = prevState.find(([lng, lat]) => {
        return lng === coordinates.lng && lat === coordinates.lat;
      });
      return !validateCoordinates ? [...prevState, coordinates] : prevState;
    });
  };

  const handleMarkerButton = (e, coordinateMarker, index) => {
    e.preventDefault();
    const markerData = {
      coordinateMarker,
      index,
    };
    setSelectedMarker(markerData);
  };

  const handleDeleteMarker = (e, index) => {
    setMatkers((prevState) => {
      const copiedState = [...prevState];
      copiedState.splice(index, 1);
      return copiedState;
    });
    setTimeout(function () {
      setSelectedMarker(null);
    }, 300);
  };
  return (
    <div>
      <ReactMapGL
        width={width}
        height={height}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
        onClick={(e) => handleOnClick(e)}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        {...viewport}
      >
        {markers.map(([lng, lat], index) => {
          return (
            <Marker longitude={lng} latitude={lat} key={lng + lat}>
              <div className={classNames('map-marker')} onClick={(e) => handleMarkerButton(e, [lng, lat], index)}>
                {index + 1}
              </div>
            </Marker>
          );
        })}
        {/*<Marker longitude={lng} latitude={lat} key={lng + lat}>*/}
        {/*  <div className={classNames('map-marker')}>1</div>*/}
        {/*</Marker>*/}
        {selectedMarker && (
          <Popup
            longitude={selectedMarker.coordinateMarker[0]}
            latitude={selectedMarker.coordinateMarker[1]}
            closeButton={true}
            closeOnClick={false}
            onClose={() => {
              setSelectedMarker(null);
            }}
            offsetTop={-10}
            offsetLeft={15}
          >
            <div className={classNames('popup__wrapper')}>
              <button
                className={classNames('popup__button')}
                onClick={(e) => handleDeleteMarker(e, selectedMarker.index)}
              >
                Delete Marker
              </button>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};
