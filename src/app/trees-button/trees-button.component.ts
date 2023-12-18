import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TreesDataService } from 'src/services/trees-data.service';
import { TransferTreeDataService } from 'src/services/transfer-tree-data.service';

@Component({
  selector: 'app-trees-button',
  templateUrl: './trees-button.component.html',
  styleUrls: ['./trees-button.component.css'],
})
export class TreesButtonComponent implements OnInit {

  trees: Observable<any>;  // Almacenar todos los arboles
  selectedTree: any;       // Almacenar el árbol seleccionados
  selectedTreePhotos: any; // Almacenar las fotos del árbol seleccionado

  constructor(
    private treesDataService: TreesDataService, // Obtener datos de los arboles y sus ubicaciones
    private transferDataService: TransferTreeDataService // Servicio de transferencia de datos entre compontentes
  ) {
    // Obtencion de los datos de todos los arboles
    this.trees = this.treesDataService.getTreesAndLocationsData();
  }

  ngOnInit(): void {
    this.selectedTree = 'default'; // Establecer el primer elemento por defecto
  }

  /*
  ** Función para seleccionar un árbol y enviar su valor a otros componentes mediante servicios
  ** @param event: Event - Evento de selección de un árbol
  ** @return void - No retorna ningún valor
  */
  onTreeSelected(event:Event): void {
    this.treesDataService.getTreePhotosByIdData(this.selectedTree.arbol_id).subscribe(treePhotos => {
      this.transferDataService.setTree(this.selectedTree);
      this.transferDataService.setPhotos(treePhotos);
    });
  }


}
