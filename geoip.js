// Return the Qld region that the users IP is located in
function getUserRegion() {
$.get("http://freegeoip.net/json", function(response) {
checkRegion(response)
}, "jsonp");
}
function checkRegion(response) {
// ==TEST POINTS==
// var ipLocation = turf.point([147.156985,-25.379368]); // Central Queensland
// var ipLocation = turf.point([153.045693,-27.498004]); // Brisbane
var userPoint = turf.point([response.longitude,response.latitude]);
window.region = '';
for(var i = 0; i < regions.features.length; i++) {
if (turf.inside(userPoint,regions.features[i])) {
window.region = regions.features[i].properties.Regions;
}
}
if (region == '') {
window.region = 'Brisbane';
}
}
