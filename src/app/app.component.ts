import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TreesDataService } from 'src/services/trees-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TreesApp';
  trees: Observable<any>;
  locations: Observable<any>;
  photos: Observable<any>;

  constructor(private treesDataService: TreesDataService) {
    this.trees = this.treesDataService.getTreesData();
    this.locations = this.treesDataService.getLocationsData();
    this.photos = this.treesDataService.getPhotosData();
  }
}
