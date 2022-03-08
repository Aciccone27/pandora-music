import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  SongRouteListItemModel } from "./song-route-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class SongRouteListService{
    //private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    //private songEndpoint: string = "songroutelist.json";

    constructor(private db: AngularFireDatabase){

    }
    public getSongsRoute(){
        return this.db.list<SongRouteListItemModel>("songs").valueChanges();
    }

    public getSongRoute(index:number){
        //return this.http.get< SongRouteListItemModel>(this.baseUrl + 'songs' + '/' + index + '.json');
    }
}