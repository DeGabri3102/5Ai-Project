//leaflet e maptiler cloud per la mappa ed il layout
var titolo = document.getElementsByTagName("title")[0].innerHTML;
//creazione mappa
var map = L.map("map").setView([41.32, 12.43], 4);
map.options.minZoom = 3; //zoom minimo della mappa
//layout della mappa
var gl = L.mapboxGL({
  attribution:
    '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
  style:
    "https://api.maptiler.com/maps/streets/style.json?key=q4f8v5cxCTMoF6rhenMI",
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

var pPA = L.marker([38.131670748614305, 13.370361508308102], {
  icon: iconaMarker,
}).addTo(map);

var pGE = L.marker([44.40890665565174, 8.922326316283074], {
  icon: iconaMarker,
}).addTo(map);

var pVE = L.marker([45.43152666963346, 12.312691276905007], {
  icon: iconaMarker,
}).addTo(map);

var pSS = L.marker([41.135395372183, 9.531980754476175], {
  icon: iconaMarker,
}).addTo(map);

var pNA = L.marker([40.843845137614984, 14.263327815339958], {
  icon: iconaMarker,
}).addTo(map);

//funzioni Marker (click, mouseover e mouse out)
//Catania
pCT.on("mouseover", function (e) {
  pCT
    .bindPopup(
      '<b> Porto di Catania </b> <br> <iframe width="200" height="123" scrolling="no" frameborder="no" noresize="noresize" src="https://www.ilmeteo.it/box/previsioni.php?citta=5913&type=real1&width=200&ico=1&lang=ita&days=6&font=Arial&fontsize=12&bg=FFFFFF&fg=000000&bgtitle=FFFFFF&fgtitle=FFFFFF&bgtab=FFFFFF&fglink=1773C2"></iframe>'
    )
    .openPopup();
});
pCT.on("mouseout", function (e) {
  pCT.closePopup();
});
pCT.on("click", function (e) {
  NolCatania(); //quando clicco sul marker apre un'altra pagina html
  Noleggio();
});
//Palermo
pPA.on("mouseover", function (e) {
  pPA
    .bindPopup(
      '<b> Porto di Palermo </b><br> <iframe width="200" height="123" scrolling="no" frameborder="no" noresize="noresize" src="https://www.ilmeteo.it/box/previsioni.php?citta=3088&type=real1&width=200&ico=1&lang=ita&days=6&font=Arial&fontsize=12&bg=FFFFFF&fg=000000&bgtitle=FFFFFF&fgtitle=FFFFFF&bgtab=FFFFFF&fglink=1773C2"></iframe>'
    )
    .openPopup();
});
pPA.on("mouseout", function (e) {
  pPA.closePopup();
});
pPA.on("click", function (e) {
  NolPalermo(); //quando clicco sul marker apre un'altra pagina html
  Noleggio();
});
//Genova
pGE.on("mouseover", function (e) {
  pGE
    .bindPopup(
      '<b> Porto di Genova </b> <br> <iframe width="200" height="123" scrolling="no" frameborder="no" noresize="noresize" src="https://www.ilmeteo.it/box/previsioni.php?citta=3088&type=real1&width=200&ico=1&lang=ita&days=6&font=Arial&fontsize=12&bg=FFFFFF&fg=000000&bgtitle=FFFFFF&fgtitle=FFFFFF&bgtab=FFFFFF&fglink=1773C2"></iframe>'
    )
    .openPopup();
});
pGE.on("mouseout", function (e) {
  pGE.closePopup();
});
pGE.on("click", function (e) {
  NolGenova(); //quando clicco sul marker apre un'altra pagina html
  Noleggio();
});
//Venezia
pVE.on("mouseover", function (e) {
  pVE
    .bindPopup(
      '<b> Porto di Venezia </b> <br> <iframe width="200" height="123" scrolling="no" frameborder="no" noresize="noresize" src="https://www.ilmeteo.it/box/previsioni.php?citta=7729&type=real1&width=200&ico=1&lang=ita&days=6&font=Arial&fontsize=12&bg=FFFFFF&fg=000000&bgtitle=FFFFFF&fgtitle=FFFFFF&bgtab=FFFFFF&fglink=1773C2"></iframe>'
    )
    .openPopup();
});
pVE.on("mouseout", function (e) {
  pVE.closePopup();
});
pVE.on("click", function (e) {
  NolVenezia(); //quando clicco sul marker apre un'altra pagina html
  Noleggio();
});
//Porto cervo
pSS.on("mouseover", function (e) {
  pSS
    .bindPopup(
      '<b> Porto cervo </b> <br> <iframe width="200" height="123" scrolling="no" frameborder="no" noresize="noresize" src="https://www.ilmeteo.it/box/previsioni.php?citta=8113&type=real1&width=200&ico=1&lang=ita&days=6&font=Arial&fontsize=12&bg=FFFFFF&fg=000000&bgtitle=FFFFFF&fgtitle=FFFFFF&bgtab=FFFFFF&fglink=1773C2"></iframe>'
    )
    .openPopup();
});
pSS.on("mouseout", function (e) {
  pSS.closePopup();
});
pSS.on("click", function (e) {
  NolPortoCervo(); //quando clicco sul marker apre un'altra pagina html
  Noleggio();
});
//Napoli
pNA.on("mouseover", function (e) {
  pNA
    .bindPopup(
      '<b> Porto di Napoli </b> <br> <iframe width="200" height="123" scrolling="no" frameborder="no" noresize="noresize" src="https://www.ilmeteo.it/box/previsioni.php?citta=4579&type=real1&width=200&ico=1&lang=ita&days=6&font=Arial&fontsize=12&bg=FFFFFF&fg=000000&bgtitle=FFFFFF&fgtitle=FFFFFF&bgtab=FFFFFF&fglink=1773C2"></iframe>'
    )
    .openPopup();
});
pNA.on("mouseout", function (e) {
  pNA.closePopup();
});
pNA.on("click", function (e) {
  NolNapoli(); //quando clicco sul marker apre un'altra pagina html
  Noleggio();
});

//#endregion funzioni markers

//funzioni noleggio al click della mappa
var nolCatania = document.getElementById("nolCatania");
var nolPalermo = document.getElementById("nolPalermo");
var nolPortoCervo = document.getElementById("nolPortoCervo");
var nolVenezia = document.getElementById("nolVenezia");
var nolNapoli = document.getElementById("nolNapoli");
var nolGenova = document.getElementById("nolGenova");
function Noleggio() {
  document.getElementById("noleggio").style.display = "block";
}

function NolCatania() {
  nolCatania.style.display = "block";
  nolPalermo.style.display = "none";
  nolPortoCervo.style.display = "none";
  nolVenezia.style.display = "none";
  nolNapoli.style.display = "none";
  nolGenova.style.display = "none";
}
function NolPalermo() {
  nolCatania.style.display = "none";
  nolPalermo.style.display = "block";
  nolPortoCervo.style.display = "none";
  nolVenezia.style.display = "none";
  nolNapoli.style.display = "none";
  nolGenova.style.display = "none";
}
function NolPortoCervo() {
  nolCatania.style.display = "none";
  nolPalermo.style.display = "none";
  nolPortoCervo.style.display = "block";
  nolVenezia.style.display = "none";
  nolNapoli.style.display = "none";
  nolGenova.style.display = "none";
}
function NolVenezia() {
  nolCatania.style.display = "none";
  nolPalermo.style.display = "none";
  nolPortoCervo.style.display = "none";
  nolVenezia.style.display = "block";
  nolNapoli.style.display = "none";
  nolGenova.style.display = "none";
}
function NolNapoli() {
  nolCatania.style.display = "none";
  nolPalermo.style.display = "none";
  nolPortoCervo.style.display = "none";
  nolVenezia.style.display = "none";
  nolNapoli.style.display = "block";
  nolGenova.style.display = "none";
}
function NolGenova() {
  nolCatania.style.display = "none";
  nolPalermo.style.display = "none";
  nolPortoCervo.style.display = "none";
  nolVenezia.style.display = "none";
  nolNapoli.style.display = "none";
  nolGenova.style.display = "block";
}
