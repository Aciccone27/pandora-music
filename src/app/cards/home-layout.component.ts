import { Component, OnInit } from "@angular/core";
import { ArtistItemModel } from "../Artists/artists-item.model";
import { mock_artist_list } from "../Artists/mock_artist_list";
import { AlbumItemModel } from "./album-item.model";
import { AlbumListService } from "./albums.service";
import { CarolItemModel } from "./carol-item.model";
import { CarolListService } from "./carol.service";




@Component({
    selector: 'pandora-home',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
    albums: AlbumItemModel [] = [];
  artists: ArtistItemModel [] = [];
  carol: CarolItemModel [] =[];

  constructor(private carolListService: CarolListService, private albumListService: AlbumListService){

    

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

    //for carol
    this.carolListService.getCarols().subscribe((data: CarolItemModel []) => {
      console.log("Fetching song list data");
      for (var carol of data) {
        this.carol.push(carol);
      }
    })
  }


}