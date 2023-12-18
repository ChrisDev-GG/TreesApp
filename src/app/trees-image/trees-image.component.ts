import { Component, OnInit } from '@angular/core';
import { TransferTreeDataService } from 'src/services/transfer-tree-data.service';

@Component({
  selector: 'app-trees-image',
  templateUrl: './trees-image.component.html',
  styleUrls: ['./trees-image.component.css']
})
export class TreesImageComponent implements OnInit {

  selectedTree: any; // Almacenar datos del arbol especifico
  treePhotos: any;   // Almacenar fotos del arbol especifico

  // Url por defecto al no cargar fotos
  defaultUrl: string|null;

  constructor(
    private transferDataService: TransferTreeDataService // Servicio de transferencia de datos entre compontentes
  ) {
    this.defaultUrl = "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702684800&semt=ais";
  }

  ngOnInit(): void {
    // Obtencion de los datos del arbol y sus fotos
    this.transferDataService.tree.subscribe(tree => {
      this.selectedTree = tree;
    });
    this.transferDataService.photos.subscribe(photos => {
      this.treePhotos = photos;
    });
  }

}
