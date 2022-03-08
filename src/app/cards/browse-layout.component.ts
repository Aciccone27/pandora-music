import { Component, OnInit } from "@angular/core";
import { ArtistItemModel } from "../Artists/artists-item.model";
import { mock_artist_list } from "../Artists/mock_artist_list";
import { AlbumItemModel } from "./album-item.model";
import { AlbumListService } from "./albums.service";
import { mock_album_lists } from "./mock_album_list";

@Component({
    selector: 'pandora-browse',
    templateUrl: 'browse-layout.component.html',
    styleUrls: ['browse-layout.component.css']
})
export class BrowseLayoutComponent implements OnInit{
    albums: AlbumItemModel [] = [];
    artists: ArtistItemModel [] = [];
  
    constructor(private albumListService: AlbumListService){
  
    
      //for artists
      for (var artist of mock_artist_list){
        console.log(artist);
        this.artists.push(artist);
      }
    }
    ngOnInit(): void {
      //for album covers
    this.albumListService.getAlbums().subscribe((data: AlbumItemModel []) => {
      console.log("Fetching song list data");
      for (var albums of data) {
        this.albums.push(albums);
      }
    })
  }
}