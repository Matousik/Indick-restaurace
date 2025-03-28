let map;

// Initializators for every restaurant
function initMapUstiUStadionu() {
    const LatLng = { lat: 50.6742897042505, lng: 14.017426757188618 };
    initMapCommon(LatLng);
}

function initMapTeplice() {
    const LatLng = { lat: 50.64172563383705, lng: 13.829032850353265 };
    initMapCommon(LatLng);
}

function initMapBudejovicePiaristicka() {
    const LatLng = { lat: 48.97472759094028, lng: 14.487053544683244 };
    initMapCommon(LatLng);
}

function initMapBudejoviceChelcickeho() {
    const LatLng = { lat: 48.97472759094028, lng: 14.487407596277993 };
    initMapCommon(LatLng);
}

function initMapUstiMiroveNamesti() {
    const LatLng = { lat: 50.460881702429106, lng: 13.419242936849894 };
    initMapCommon(LatLng);
}

function initMapDecin() {
    const LatLng = { lat: 50.780552544397544, lng: 14.214210435017769 };
    initMapCommon(LatLng);
}

function initMapChomutov() {
    const LatLng = { lat: 50.460865721594175, lng: 13.418717702970689 };
    initMapCommon(LatLng);
}

function initMapTabor() {
    const LatLng = { lat: 49.41247979536338, lng: 14.671795165616873 };
    initMapCommon(LatLng);
}

function initMapUstiNadLabemCentrum() {
    const LatLng = { lat: 50.660609026612285, lng: 14.04399657116445 };
    initMapCommon(LatLng);
}

function initMapCommon(LatLng) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: LatLng,
        zoom: 15,
    });

    var marker = new google.maps.Marker({
        position: LatLng,
        map,
        title: "Taj Mahal"
    });
    
    marker.setMap(map);
}