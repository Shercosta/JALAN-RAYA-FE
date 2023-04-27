var map = L.map("map").setView([-5.36006, 105.31545], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([-5.36006, 105.31545]).addTo(map);

marker.bindPopup("<b>GYM ITERA</b><br>Basement Gedung E").openPopup();

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Koordinat titik " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);
