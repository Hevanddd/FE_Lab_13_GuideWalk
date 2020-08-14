import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import './map-direction.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export const MapDirectionsComponent = ({ markerPositions, zoom }) => {
  const { startMarkerPositions, finishMarkerPositions } = markerPositions;
  const mapWrapper = useRef();
  const [geolocatePosition, setGeolocatePosition] = useState();
  const [isFirstPointWithGeolocate, setIsFirstPointWithGeolocate] = useState(true);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapWrapper.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: startMarkerPositions || geolocatePosition,
      zoom,
    });
    const directions = new MapboxDirections(
      {
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/walking',
        controls: {
          inputs: false,
          profileSwitcher: false,
          instructions: false,
        },
      },
      []
    );

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    map.addControl(geolocate);
    geolocate.on('geolocate', function (data) {
      const latitude = data.coords.latitude;
      const longitude = data.coords.longitude;
      setGeolocatePosition([longitude, latitude]);
      setIsFirstPointWithGeolocate(false);
    });

    map.addControl(directions, 'top-left');

    map.on('load', () => {
      if (!startMarkerPositions) {
        geolocate.trigger();
        geolocatePosition && directions.setOrigin(geolocatePosition);
        geolocatePosition && directions.setWaypoint(0, geolocatePosition);
      } else {
        directions.setOrigin(startMarkerPositions);
        directions.setWaypoint(0, startMarkerPositions);
      }
      directions.setWaypoint(1, finishMarkerPositions);
      directions.setDestination(finishMarkerPositions);
    });
    //eslint-disable-next-line
  }, [markerPositions, isFirstPointWithGeolocate]);

  return <div id='app' ref={mapWrapper} className='mapWrapper' />;
};
