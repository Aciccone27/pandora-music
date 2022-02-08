import { Component } from '@angular/core';
import { AlbumItemModel } from './cards/album-item.model';
import { mock_album_lists } from './cards/mock_album_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pandora-music';
  albums: AlbumItemModel [] = [];

  constructor(){
    for (var album of mock_album_lists){
      console.log(album);
      this.albums.push(album);
    }
  }
}
