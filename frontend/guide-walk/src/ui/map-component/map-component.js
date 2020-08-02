import React, { useState } from 'react';
import MapGL, { Marker, GeolocateControl } from '@urbica/react-map-gl';
import { Layer, Source } from 'react-map-gl';
import { VIEWPORT, DATA } from './constants';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapComponent = ({ width, height, zoom }) => {
  const mapStyle = {
    width,
    height,
  };
  const { latitude, longitude } = VIEWPORT;
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
  });
  const [markers, setMatkers] = useState([]);
  const style = {
    padding: '10px',
    color: '#fff',
    cursor: 'pointer',
    background: '#1978c8',
    borderRadius: '50%',
    textAlign: 'center',
    width: '20px',
    height: '20px',
    fontSize: '15px',
  };
  const handleOnClick = (e) => {
    const coordinates = e.lngLat;

    setMatkers((prevState) => {
      const validateCoordinates = prevState.find(({ lng, lat }) => {
        return lng === coordinates.lng && lat === coordinates.lat;
      });
      return !validateCoordinates ? [...prevState, coordinates] : prevState;
    });
  };

  const handleMarkerButton = (e) => {
    console.log('sad');
    e.preventDefault();
  };

  return (
    <div>
      <MapGL
        style={mapStyle}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
        onClick={(e) => handleOnClick(e)}
        {...viewport}
      >
        <Source id='route' type='geojson' data={DATA} />
        <Layer
          id='route'
          type='line'
          source='route'
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
          paint={{
            'line-color': '#888',
            'line-width': 8,
          }}
        />
        {markers.map(({ lng, lat }, index) => {
          return (
            <Marker longitude={lng} latitude={lat} key={lng + lat} onClick={handleMarkerButton}>
              <div style={style}>{index + 1}</div>
            </Marker>
          );
        })}
        <GeolocateControl position='top-right' />
      </MapGL>
    </div>
  );
};
