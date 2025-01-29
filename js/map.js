let map;

// Initializators for every restaurant
function initMapUstiUStadionu() {
    const LatLng = { lat: 50.6742897042505, lng: 14.017426757188618 };
    initMapCommon(LatLng);
}

function initMapTeplice() {
    const LatLng = { lat: 50.6402247, lng: 13.8244867 };
    initMapCommon(LatLng);
}

function initMapDubi() {
    const LatLng = { lat: 50.6960189, lng: 13.7843075 };
    initMapCommon(LatLng);
}

function initMapMost() {
    const LatLng = { lat: 50.5016111, lng: 13.6333161 };
    initMapCommon(LatLng);
}

function initMapChomutov() {
    const LatLng = { lat: 50.4604156, lng: 13.4127689 };
    initMapCommon(LatLng);
}

function initMapLitvinov() {
    const LatLng = { lat: 50.6023625, lng: 13.6124497 };
    initMapCommon(LatLng);
}

function initMapUstiTrmice() {
    const LatLng = { lat: 50.6391925, lng: 14.0111714 };
    initMapCommon(LatLng);
}

function initMapUstiStribrniky() {
    const LatLng = { lat: 50.6657497, lng: 14.0430714 };
    initMapCommon(LatLng);
}

function initMapUstiKrasneBrezensko() {
    const LatLng = { lat: 50.6657497, lng: 14.0430714 };
    initMapCommon(LatLng);
}

function initMapCommon(LatLng) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: LatLng,
        zoom: 15,
    });

    const image = "./images/taj-mahal-map-thumb-75.png";

    var marker = new google.maps.Marker({
        position: LatLng,
        map,
        title: "Taj Mahal",
        icon: image,
    });
    
    marker.setMap(map);
}