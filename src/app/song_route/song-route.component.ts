import { Component, OnInit } from "@angular/core";
import { AlbumItemModel } from "../cards/album-item.model";
import { AlbumListService } from "../cards/albums.service";
import { CarolItemModel } from "../cards/carol-item.model";
import { CarolListService } from "../cards/carol.service";
//import { SongListItemModel } from "../Lists/song-list-item.model";
import { SongRouteListItemModel } from "./song-route-item.model";
import { SongRouteListService } from "./song_route.service";


@Component({
  selector: 'pandora-songroute',
  templateUrl: 'song-route.component.html',
  styleUrls: ['song-route.component.css']
})
export class SongRouteComponent implements OnInit {
  albums: AlbumItemModel [] = [];
  slist: SongRouteListItemModel[] = [];
  carol: CarolItemModel [] = [];

  constructor(private songRouteListService:SongRouteListService, private carolListService: CarolListService, private albumListService: AlbumListService) {
   
  }
  ngOnInit(): void {
    //song route list
    this.songRouteListService.getSongsRoute().subscribe((data: SongRouteListItemModel []) => {
      console.log("Fetching song list data");
      for (var slist of data) {
        this.slist.push(slist);
      }
    })

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

