//leaflet e maptiler cloud per la mappa ed il layout
//creazione mappa
var map = L.map("map").setView([41.32, 12.43], 5);
map.options.minZoom = 3; //zoom minimo della mappa
//layout della mappa
var gl = L.mapboxGL({
  attribution:
    '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
  style:
    "https://api.maptiler.com/maps/topo/style.json?key=q4f8v5cxCTMoF6rhenMI",
}).addTo(map);

//icona del marker
var iconaMarker = L.icon({
  iconUrl: "Contenuti/icon.png",
  iconSize: [20, 33],
  iconAnchor: [10, 33],
  popupAnchor: [0, -33],
});

//#region funzioni markers
//Crezione markers
var pCT = L.marker([37.49999854908266, 15.092726179042742], {
  icon: iconaMarker,
}).addTo(map);

var pTP = L.marker([38.01499668898515, 12.51251512420763], {
  icon: iconaMarker,
}).addTo(map);

var pGE = L.marker([44.40890665565174, 8.922326316283074], {
  icon: iconaMarker,
}).addTo(map);

var pVE = L.marker([45.43152666963346, 12.312691276905007], {
  icon: iconaMarker,
}).addTo(map);

var pCA = L.marker([39.20943138809172, 9.104291988262116], {
  icon: iconaMarker,
}).addTo(map);

var pNA = L.marker([40.843845137614984, 14.263327815339958], {
  icon: iconaMarker,
}).addTo(map);

//funzioni Marker (click, mouseover e mouse out)
//Catania
pCT.on("mouseover", function (e) {
  pCT.bindPopup("<b> Porto di Catania </b>").openPopup();
});
pCT.on("mouseout", function (e) {
  pCT.closePopup();
});
pCT.on("click", function (e) {
  window.open("https://www.adspmaresiciliaorientale.it/porto-di-catania/"); //quando clicco sul marker apre un'altra pagina html
});
//Trapani
pTP.on("mouseover", function (e) {
  pTP.bindPopup("<b> Porto di Trapani </b>").openPopup();
});
pTP.on("mouseout", function (e) {
  pTP.closePopup();
});
pTP.on("click", function (e) {
  window.open("http://www.portotrapani.it/"); //quando clicco sul marker apre un'altra pagina html
});
//Genova
pGE.on("mouseover", function (e) {
  pGE.bindPopup("<b> Porto di Genova </b>").openPopup();
});
pGE.on("mouseout", function (e) {
  pGE.closePopup();
});
pGE.on("click", function (e) {
  window.open("https://www.portsofgenoa.com/it/"); //quando clicco sul marker apre un'altra pagina html
});
//Venezia
pVE.on("mouseover", function (e) {
  pVE.bindPopup("<b> Porto di Venezia </b>").openPopup();
});
pVE.on("mouseout", function (e) {
  pVE.closePopup();
});
pVE.on("click", function (e) {
  window.open("https://www.port.venice.it/it"); //quando clicco sul marker apre un'altra pagina html
});
//Cagliari
pCA.on("mouseover", function (e) {
  pCA.bindPopup("<b> Porto di Cagliari </b>").openPopup();
});
pCA.on("mouseout", function (e) {
  pCA.closePopup();
});
pCA.on("click", function (e) {
  window.open("http://www.adspmaredisardegna.it/cagliari/"); //quando clicco sul marker apre un'altra pagina html
});
//Napoli
pNA.on("mouseover", function (e) {
  pNA.bindPopup("<b> Porto di Napoli </b>").openPopup();
});
pNA.on("mouseout", function (e) {
  pNA.closePopup();
});
pNA.on("click", function (e) {
  window.open("https://adsptirrenocentrale.it/"); //quando clicco sul marker apre un'altra pagina html
});
//#endregion funzioni markers
