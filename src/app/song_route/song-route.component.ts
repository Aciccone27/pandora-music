import { Component } from "@angular/core";
import { AlbumItemModel } from "../cards/album-item.model";
import { CarolItemModel } from "../cards/carol-item.model";
import { mock_album_lists } from "../cards/mock_album_list";
import { mock_carol_list } from "../cards/mock_carol_list";
import { mock_song_route_list } from "./mock_song_route_list";
import { SongRouteListItemModel } from "./song-route-item.model";

@Component({
  selector: 'pandora-songroute',
  templateUrl: 'song-route.component.html',
  styleUrls: ['song-route.component.css']
})
export class SongRouteComponent {
  albums: AlbumItemModel [] = [];
  slist: SongRouteListItemModel[] = [];
  carol: CarolItemModel [] = [];

  constructor() {
    //for album covers in carosel
    for (var album of mock_album_lists){
      console.log(album);
      this.albums.push(album);
    }

    //for album covers
    for (var slist of mock_song_route_list) {
      console.log(slist);
      this.slist.push(slist);
    }

     //for carol
     for (var carol of mock_carol_list){
      console.log(carol);
      this.carol.push(carol);
    }
  }
}

