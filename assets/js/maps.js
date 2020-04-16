        function initMap() {
            // map a new google map to my div with id"map"
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: { //set map to start on europe
                    lat: 50.619261,
                    lng: 3.134766
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{ // vu amsterdam 
                lat: 52.335278,
                lng: 4.865291
            },
            { // ku leuven 
                lat: 50.878110,
                lng: 4.700338
            },
                { //university of nottingham
                lat: 52.56296,
                lng: 1.11453
            }, { //university of kent
                lat: 51.298601,
                lng: 1.063239
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            //was >> var markerCluster = new MarkerClusterer(map, markers, ..) (but wasnt read)??
            new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }
