/* MAP */

var map = L.map('map').setView([43.296482, 5.36978], 14);

/*Pointers*/
var marker = L.marker([43.296482, 5.36978]).addTo(map);

/* IMAGES DE LA CARTE */
var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

/*Ajout des images dans la map*/
Stadia_AlidadeSmoothDark.addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


fetch("data_marseille.json")
    .then(res=>(res.json()))
    .then((data)=> {
        for(let element in data){
            marker = L.marker([data[element].latitude, data[element].longitude]).addTo(map).bindPopup(data[element].name);
        }

    })

    
    




