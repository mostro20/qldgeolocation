// Call GeoIP URL from user's location
$.get("http://freegeoip.net/json", function(response) {
    //if your site is using SSL then use https instead of http
    // long = response.longitude;
    // lat = response.latitude;
    // console.log(long, lat);
    var point = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [response.longitude, response.latitude]
      }
    };
}, "jsonp");

// Another GeoIP service
// $.get("http://ipinfo.io", function(response) {
//     var point = response.loc;
//     console.log(response.loc);
// }, "jsonp");

// var myregions = JSON.parse(regions);

// Loop through qld region dataset to find where latitude/longitude are within
function load(point) {
for(var i = 0; i < regions.features.length; i++) {
    regions.features[i].properties = {};
    regions.features[i].bbox = turf.bbox(regions.features[i]);
    regions.features[i].properties.point = 0;
    for(var j = 0; j < point.features.length; j++) {
        if(point.features[j].geometry.coordinates[0] >= regions.features[i].bbox[0] &&
            point.features[j].geometry.coordinates[0] <= regions.features[i].bbox[2] &&
            point.features[j].geometry.coordinates[1] >= regions.features[i].bbox[1] &&
            point.features[j].geometry.coordinates[1] <= regions.features[i].bbox[3] &&
            turf.inside(point.features[j],regions.features[i])) {
            // Don't think this part is needed ??
            // regions.features[i].properties.point++;
            // result = "Queensland";
            console.log("Queensland");
        } else {
            // result = regions[0].ID;
            console.log(regions[0].ID);
        }
    }
}
}
