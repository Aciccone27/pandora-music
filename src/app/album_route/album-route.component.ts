import { Component } from "@angular/core";

import { AlbumItemModel } from "../cards/album-item.model";
import { CarolItemModel } from "../cards/carol-item.model";
import { mock_album_lists } from "../cards/mock_album_list";
import { mock_carol_list } from "../cards/mock_carol_list";
import { AlbumRouteItemModel } from "./album-route-item.model";
import { mock_album_route_list } from "./mock_album_route_list";

@Component({
    selector: 'pandora-albumroute',
    templateUrl: 'album-route.component.html',
    styleUrls: ['album-route.component.css']
  })
  export class AlbumRouteComponent {
    albums: AlbumItemModel [] = [];
    alist: AlbumRouteItemModel[] = [];
    carol: CarolItemModel [] = [];
  
    constructor() {
      //for album covers in carosel
      for (var album of mock_album_lists){
        console.log(album);
        this.albums.push(album);
      }
  
      //for album covers
      for (var alist of mock_album_route_list) {
        console.log(alist);
        this.alist.push(alist);
      }
  
       //for carol
       for (var carol of mock_carol_list){
        console.log(carol);
        this.carol.push(carol);
      }
    }
  }
  