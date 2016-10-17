// Call GeoIP URL from user's location
var url = "http://freegeoip.net/json/";

// Grab latitude and longitude from user's ip location
var point = url["latitude"] + url["longitude"]; 

// Loop through qld region dataset to find where latitude/longitude are within
for(var i = 0; i < regions.features.length; i++) {
    regions.features[i].properties = {};
    regions.features[i].bbox = turf.extent(regions.features[i]);
    regions.features[i].properties.point = 0;
    for(var j = 0; j < point.features.length; j++) {
        if(point.features[j].geometry.coordinates[0] >= regions.features[i].bbox[0] &&
           point.features[j].geometry.coordinates[0] <= regions.features[i].bbox[2] &&
           point.features[j].geometry.coordinates[1] >= regions.features[i].bbox[1] &&
           point.features[j].geometry.coordinates[1] <= regions.features[i].bbox[3] &&
           turf.inside(point.features[j],regions.features[i])) {
            // Don't think this part is needed ??
            // regions.features[i].properties.point++;
        }
    }
}



// var regions = 'QLD_LGA_POLYGON_shp_diss_smooth5.geojson'
// point.properties.title = turf.inside(point, regions);