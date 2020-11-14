function updateMap() {
  fetch("https://www.trackcorona.live/api/countries")
  // fetch("https://www.trackcorona.live/api/cities")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);

      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.confirmed;
        if (cases > 2755) {
          color = "rgb(255,0,0)";
        } else {
          color = `rgb(${cases},0,0)`;
        }
        //mark these on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
let interval = 2000;
setInterval(updateMap,interval);
