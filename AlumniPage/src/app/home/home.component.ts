import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mymap = L.map('mapid').setView([47.76373384154017, 16.47437060634195], 4);

L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=lZBJn9vYwRu3BGBFF13J', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(mymap);

var clemens_icon = L.icon({
	iconUrl: 'https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_960_720.jpg',
	shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

	iconSize:     [60, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 34], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -16] // point from which the popup should open relative to the iconAnchor
});

var osama_icon = L.icon({
	iconUrl: 'https://cdn.pixabay.com/photo/2019/05/07/23/57/hippo-4187448_960_720.jpg',
	shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

	iconSize:     [60, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 34], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -16] // point from which the popup should open relative to the iconAnchor
});

var sarah_icon = L.icon({
	iconUrl: 'https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_960_720.jpg',
	shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

	iconSize:     [60, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [-30, 34], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [60, -16] // point from which the popup should open relative to the iconAnchor
});

var anu_icon = L.icon({
	iconUrl: 'https://cdn.pixabay.com/photo/2015/01/27/19/34/giraffe-614141_960_720.jpg',
	shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',

	iconSize:     [60, 60], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 34], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -16] // point from which the popup should open relative to the iconAnchor
});

var clemens = L.marker([48.208176, 16.373819], {icon: clemens_icon}).addTo(mymap);
clemens.bindPopup("<b>Hello I am from Austria!</b>").openPopup();

var anu = L.marker([58.391689, 24.495289], {icon: anu_icon}).addTo(mymap);
anu.bindPopup("<b>Hello I am from Estonia!</b>").openPopup();

var sarah = L.marker([48.208176, 16.373819], {icon: sarah_icon}).addTo(mymap);
sarah.bindPopup("<b>Hello I am from Austria!</b>").openPopup();

var osama = L.marker([33.513805, 36.276527], {icon: osama_icon}).addTo(mymap);
osama.bindPopup("<b>Hello I am from Syria!</b>").openPopup();

// https://leafletjs.com
// https://www.maptiler.com/

}



}
