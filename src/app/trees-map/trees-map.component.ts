import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TransferTreeDataService } from 'src/services/transfer-tree-data.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-trees-map',
  templateUrl: './trees-map.component.html',
  styleUrls: ['./trees-map.component.css']
})
export class TreesMapComponent implements AfterViewInit, OnInit {

  map: any;
  markerLayer: any;
  mapIcon: any;
  selectedTree: any; // Almacenar datos del arbol especifico
  latitude: any = 40.7128;
  longitude: any = -4.0060;

  constructor(
    private transferDataService: TransferTreeDataService
  ) { }

  ngOnInit(): void {
    // Obtencion de los datos del arbol y sus fotos
    this.transferDataService.tree.subscribe(tree => {
      this.selectedTree = tree;
      this.latitude = tree.latitud;
      this.longitude = tree.longitud;
      this.removeMarkerAndCenterMap(tree.latitud, tree.longitud);
    });
  }

  ngAfterViewInit(): void {
    this.initMap( 40.7128, -74.0060 );
  }

  private initMap(lat: number, lon: number): void {
    this.mapIcon = L.icon({
      iconUrl: '../../assets/leaf-green.png', // Ruta relativa a la imagen del marcador
      iconSize: [25, 41], // Tamaño del icono
      iconAnchor: [12, 41], // Punto del icono que corresponde a la ubicación del marcador
      popupAnchor: [1, -34] // Punto desde el cual se abrirá el cuadro emergente del marcador
    });

    this.map = L.map('map', {
      center: [ lat, lon ],
      zoom: 4
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    this.markerLayer = L.layerGroup().addTo(this.map); // Capa para almacenar los marcadores
  }

  removeMarkerAndCenterMap(lat: number, lon: number): void {
    this.markerLayer.clearLayers(); // Eliminar los marcadores anteriores
    L.marker([lat, lon], { draggable: false, icon: this.mapIcon }).addTo(this.markerLayer); // Agregar nuevo marcador
    this.map.setView([lat, lon], 12); // Centrar el mapa en una nueva ubicación
  }
}
