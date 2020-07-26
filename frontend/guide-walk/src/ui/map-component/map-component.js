import React, { useState } from 'react';
import MapGL, { Marker, GeolocateControl } from '@urbica/react-map-gl';
import { useHistory } from 'react-router';
import { Layer, Source } from 'react-map-gl';
import { VIEWPORT, DATA, URL } from './constants';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapComponent = ({ getHomeUserDataSuccess, data, width, height, zoom }) => {
  const mapStyle = {
    width,
    height,
  };
  const history = useHistory();
  const { latitude, longitude } = VIEWPORT;
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom,
  });
  const [position, setPosition] = useState({
    longitude,
    latitude,
  });
  const style = {
    padding: '10px',
    color: '#fff',
    cursor: 'pointer',
    background: '#1978c8',
    borderRadius: '6px',
  };
  const onDragEnd = (lngLat) => {
    setPosition({ longitude: lngLat.lng, latitude: lngLat.lat });
  };
  const routeData = [{ name: 'Guide Walk', rating: 5, image: URL }];
  const handleOnClick = () => {
    getHomeUserDataSuccess(routeData);
    history.push('/route-list');
  };

  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
      <MapGL
        style={mapStyle}
        mapStyle='mapbox://styles/mapbox/light-v9'
        accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
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
        <Marker longitude={position.longitude} latitude={position.latitude} onDragEnd={onDragEnd} draggable>
          <div style={style}>Hi there! 👋</div>
        </Marker>
        <GeolocateControl position='top-right' />
      </MapGL>
    </div>
  );
};
