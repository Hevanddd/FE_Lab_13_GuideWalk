const [geolocatePosition, setGeolocatePosition] = useState();

const geolocate = new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
});
const marker = new mapboxgl.Marker()
  .setLngLat([longitude, latitude])
  .setPopup(new mapboxgl.Popup().setHTML('<h1>Hello World!</h1>'))
  .addTo(map);

map.addControl(geolocate);
geolocate.on('geolocate', function (data) {
  const lalitude = data.coords.latitude;
  const longitude = data.coords.longitude;
  setGeolocatePosition({ lalitude, longitude });
});
