import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map-draw.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export const MapDrawComponent = () => {
  const mapWrapper = useRef();
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapWrapper.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [24.031111, 49.842957],
      zoom: 12,
    });

    map.on('load', function () {
      map.addSource('maine', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [23.996950385986167, 49.84854711881408],
                [23.99660706323192, 49.825961283767384],
                [24.03454422753876, 49.82540757692388],
                [24.0311211, 49.842213],
              ],
            ],
          },
        },
      });
      map.addLayer({
        id: 'maine',
        type: 'fill',
        source: 'maine',
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
