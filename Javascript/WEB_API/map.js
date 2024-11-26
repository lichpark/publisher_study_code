navigator.geolocation.getCurrentPosition((v) => {
  console.log(v.coords.latitude);
  console.log(v.coords.longitude);
});
