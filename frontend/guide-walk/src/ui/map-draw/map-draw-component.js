import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { createGeoJSONCircle, getRadiusFromLatLngInKm, calculateCenterCircleWithTwoPoints } from './helpers';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map-draw.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
const data = { longitude: 24.004760978637364, latitude: 49.836812658441346 };
const data2 = { longitude: 24.046989677368202, latitude: 49.840355437175816 };

export const MapDrawComponent = () => {
  const mapWrapper = useRef();
  useEffect(() => {
    const centerRadius = calculateCenterCircleWithTwoPoints(data, data2);
    const radiusInKm = getRadiusFromLatLngInKm(data, data2);
    const map = new mapboxgl.Map({
      container: mapWrapper.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [24.031111, 49.842957],
      zoom: 12,
    });

    map.on('load', function () {
      map.addSource('polygon', createGeoJSONCircle(centerRadius, radiusInKm));

      map.addLayer({
        id: 'polygon',
        type: 'fill',
        source: 'polygon',
        layout: {},
        paint: {
          'fill-color': '#088',
          'fill-opacity': 0.5,
        },
      });
    });

    map.on('click', function (e) {
      console.log(e.lngLat);
    });
  }, []);

  return <div id='draw' ref={mapWrapper} className='mapWrapper' />;
};
