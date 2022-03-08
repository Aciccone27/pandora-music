import { Component, OnInit } from "@angular/core";

import { AlbumItemModel } from "../cards/album-item.model";
import { AlbumListService } from "../cards/albums.service";
import { CarolItemModel } from "../cards/carol-item.model";
import { CarolListService } from "../cards/carol.service";
import { AlbumRouteItemModel } from "./album-route-item.model";
import { AlbumRouteListService } from "./album_route.service";

@Component({
    selector: 'pandora-albumroute',
    templateUrl: 'album-route.component.html',
    styleUrls: ['album-route.component.css']
  })
  export class AlbumRouteComponent implements OnInit{
    albums: AlbumItemModel [] = [];
    alist: AlbumRouteItemModel[] = [];
    carol: CarolItemModel [] = [];
  
    constructor(private carolListService: CarolListService, private albumListService: AlbumListService, private albumRouteListService: AlbumRouteListService) {

    }
    ngOnInit(): void {
      //for album covers in carosel
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

     //for album covers
     this.albumRouteListService.getAlbumroutes().subscribe((data: AlbumRouteItemModel []) => {
      console.log("Fetching song list data");
      for (var alist of data) {
        this.alist.push(alist);
      }
    })
  }
}
  