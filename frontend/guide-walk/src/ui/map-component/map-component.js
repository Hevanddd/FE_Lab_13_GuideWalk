import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { VIEWPORT } from './constants';

export const MapComponent = ({ width, height, zoom }) => {
  const styleMarker = {
    width: '20px',
    height: '20px',
    backgroundColor: 'red',
    borderRadius: '50%',
    textAlign: 'center',
  };
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
              <div style={styleMarker} onClick={(e) => handleMarkerButton(e, [lng, lat], index)}>
                {index + 1}
              </div>
            </Marker>
          );
        })}
        {selectedMarker && (
          <Popup
            longitude={selectedMarker.coordinateMarker[0]}
            latitude={selectedMarker.coordinateMarker[1]}
            closeButton={true}
            closeOnClick={false}
            onClose={() => {
              setSelectedMarker(null);
            }}
          >
            <div>
              <button onClick={(e) => handleDeleteMarker(e, selectedMarker.index)}>Delete Marker</button>
            </div>
          </Popup>
        )}
        {/*<GeolocateControl position='top-right' />*/}
      </ReactMapGL>
    </div>
  );
};
