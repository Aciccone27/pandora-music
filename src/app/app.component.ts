import { Component } from '@angular/core';
import { AlbumItemModel } from './cards/album-item.model';
import { mock_album_lists } from './cards/mock_album_list';
import { ArtistItemModel } from './Artists/artists-item.model';
import { mock_artist_list } from './Artists/mock_artist_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pandora-music';
  albums: AlbumItemModel [] = [];
  artists: ArtistItemModel [] = [];

  constructor(){

    //for album covers
    for (var album of mock_album_lists){
      console.log(album);
      this.albums.push(album);
    }

    //for artists
    for (var artist of mock_artist_list){
      console.log(artist);
      this.artists.push(artist);
    }
  }

  
}

