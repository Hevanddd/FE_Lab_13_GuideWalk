import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { VIEWPORT } from '../map-component';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import './map-direction.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export const MapDirectionsComponent = () => {
  const { latitude, longitude, zoom } = VIEWPORT;
  const mapWrapper = useRef();
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapWrapper.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });
    map.addControl(directions, 'top-left');
  }, []);

  return <div id='app' ref={mapWrapper} className='mapWrapper'></div>;
};
