let map;

function initMap() {

    const LatLng = { lat: 50.6742897042505, lng: 14.017426757188618 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: LatLng,
        zoom: 15,
        });

    const image =
        "./images/taj-mahal-map-thumb-75.png";

    var marker = new google.maps.Marker({
        position: LatLng,
        map,
        title: "Taj Mahal u Stadionu",
        icon: image,
        });
    
        marker.setMap(map);
}