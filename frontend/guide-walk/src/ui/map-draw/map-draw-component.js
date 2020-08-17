import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { createGeoJSONCircle, getRadiusFromLatLngInKm, calculateCenterCircleWithTwoPoints } from './helpers';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map-draw.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export const MapDrawComponent = ({ firstPoint, lastPoint, zoom }) => {
  const longitude = firstPoint && firstPoint.longitude;
  const latitude = firstPoint && firstPoint.latitude;
  const mapWrapper = useRef();

  useEffect(() => {
    const centerRadius = calculateCenterCircleWithTwoPoints(firstPoint, lastPoint);
    const radiusInKm = getRadiusFromLatLngInKm(firstPoint, lastPoint);
    const map = new mapboxgl.Map({
      container: mapWrapper.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom,
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
  }, [firstPoint, lastPoint]);

  return <div id='draw' ref={mapWrapper} className='mapWrapper' />;
};
