import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { AlbumRouteItemModel } from "./album-route-item.model";

@Injectable({
    providedIn: 'root'
})
export class AlbumRouteListService{
    //private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    //private songEndpoint: string = "albumroutelist.json";

    constructor(private db: AngularFireDatabase){

    }
    public getAlbumroutes(){
        return this.db.list<AlbumRouteItemModel>("albumroutelist").valueChanges();
    }

    public getAlbumroute(index:number){
      
    }

    addAlbumRoute(albumroute: AlbumRouteItemModel){
        this.db.list<AlbumRouteItemModel>("albumroutelist").push(albumroute);
    }
}