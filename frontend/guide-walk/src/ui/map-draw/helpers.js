export const createGeoJSONCircle = (center, radiusInKm) => {
  const points = 64;
  const coords = {
    latitude: center[1],
    longitude: center[0],
  };

  const km = radiusInKm;

  const ret = [];
  const distanceX = km / (111.32 * Math.cos((coords.latitude * Math.PI) / 180));
  const distanceY = km / 110.574;

  let theta, x, y;
  for (let i = 0; i < points; i++) {
    theta = (i / points) * (2 * Math.PI);
    x = distanceX * Math.cos(theta);
    y = distanceY * Math.sin(theta);

    ret.push([coords.longitude + x, coords.latitude + y]);
  }
  ret.push(ret[0]);

  return {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [ret],
          },
        },
      ],
    },
  };
};
export const calculateCenterCircleWithTwoPoints = (firstCoords, secondCoords) => {
  const firstMarkerLongitude = firstCoords.longitude;
  const firstMarkerLatitude = firstCoords.latitude;
  const secondMarkerLongitude = secondCoords.longitude;
  const secondMarkerLatitude = secondCoords.latitude;
  const centerCoords = [];

  const radiusLongitudeInDeg = Math.abs((firstMarkerLongitude - secondMarkerLongitude) / 2);
  const coordsCenterLongitude =
    firstMarkerLongitude > secondMarkerLongitude
      ? secondMarkerLongitude + radiusLongitudeInDeg
      : firstMarkerLongitude + radiusLongitudeInDeg;

  centerCoords.push(coordsCenterLongitude);

  const radiusLatitudeInDeg = Math.abs((firstMarkerLatitude - secondMarkerLatitude) / 2);
  const coordsCenterLatitude =
    firstMarkerLatitude > secondMarkerLatitude
      ? secondMarkerLatitude + radiusLatitudeInDeg
      : firstMarkerLatitude + radiusLatitudeInDeg;

  centerCoords.push(coordsCenterLatitude);

  return centerCoords;
};
export const getRadiusFromLatLngInKm = (firstCoords, secondCoords) => {
  let firstMarkerLongitude = firstCoords.longitude;
  let firstMarkerLatitude = firstCoords.latitude;
  let secondMarkerLongitude = secondCoords.longitude;
  let secondMarkerLatitude = secondCoords.latitude;
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  function square(x) {
    return Math.pow(x, 2);
  }
  const r = 6371;
  firstMarkerLatitude = deg2rad(firstMarkerLatitude);
  secondMarkerLatitude = deg2rad(secondMarkerLatitude);
  const lat_dif = secondMarkerLatitude - firstMarkerLatitude;
  const lng_dif = deg2rad(secondMarkerLongitude - firstMarkerLongitude);
  const a =
    square(Math.sin(lat_dif / 2)) +
    Math.cos(firstMarkerLatitude) * Math.cos(secondMarkerLatitude) * square(Math.sin(lng_dif / 2));
  const radius = (2 * r * Math.asin(Math.sqrt(a))) / 2;

  return radius;
};
