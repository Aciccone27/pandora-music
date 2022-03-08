import { Component, OnInit } from "@angular/core";
import { AlbumItemModel } from "../cards/album-item.model";
import { CarolItemModel } from "../cards/carol-item.model";
import { mock_album_lists } from "../cards/mock_album_list";
import { mock_carol_list } from "../cards/mock_carol_list";
import { SongListItemModel } from "../Lists/song-list-item.model";
import { mock_song_route_list } from "./mock_song_route_list";
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

  constructor(private songRouteListService:SongRouteListService) {
    //for album covers in carosel
    for (var album of mock_album_lists){
      console.log(album);
      this.albums.push(album);
    }


     //for carol
     for (var carol of mock_carol_list){
      console.log(carol);
      this.carol.push(carol);
    }
  }
  ngOnInit(): void {
    this.songRouteListService.getSongsRoute().subscribe((data: SongRouteListItemModel []) => {
      console.log("Fetching song list data");
      for (var slist of data) {
        this.slist.push(slist);
      }
    })
  }
}

