import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransferTreeDataService {

  private treeSubject = new BehaviorSubject<any>(null);
  tree = this.treeSubject.asObservable();

  private photosSubject = new BehaviorSubject<any>(null);
  photos = this.photosSubject.asObservable();

  // Getter y Setter para el arbol solicitado
  setTree(selectedTree: any) {
    this.treeSubject.next(selectedTree);
  }
  getTree() {
    return this.tree;
  }

  // Getter y Setter para las fotos del arbol solicitado
  setPhotos(treePhotos: any) {
    this.photosSubject.next(treePhotos);
  }
  getPhotos() {
    return this.photos;
  }
}
