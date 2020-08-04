import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { VIEWPORT } from '../map-component';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import './map-direction.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export const MapDirectionsComponent = () => {
  const [geolocatePosition, setGeolocatePosition] = useState();
  const { latitude, longitude, zoom } = VIEWPORT;
  const mapWrapper = useRef();
  console.log(geolocatePosition);
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
      controls: {
        inputs: false,
        profileSwitcher: false,
        instructions: false,
      },
    });
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    // const marker = new mapboxgl.Marker()
    //   .setLngLat([longitude, latitude])
    //   .setPopup(new mapboxgl.Popup().setHTML('<h1>Hello World!</h1>'))
    //   .addTo(map);

    map.addControl(directions, 'top-left');
    map.addControl(geolocate);
    geolocate.on('geolocate', function (data) {
      const lalitude = data.coords.latitude;
      const longitude = data.coords.longitude;
      setGeolocatePosition({ lalitude, longitude });
    });
    map.on('load', function () {
      directions.setOrigin([longitude, latitude]);
      directions.addWaypoint(0, [longitude, latitude]);
      directions.addWaypoint(1, [longitude + 0.01, latitude + 0.001]);
      directions.setDestination([longitude + 0.01, latitude + 0.001]);
    });
  }, []);

  return <div id='app' ref={mapWrapper} className='mapWrapper' />;
};
