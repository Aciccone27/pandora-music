import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  SongRouteListItemModel } from "./song-route-item.model";

@Injectable({
    providedIn: 'root'
})
export class SongRouteListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "songroutelist.json";

    constructor(private http:HttpClient){

    }
    public getSongsRoute(){
        return this.http.get<SongRouteListItemModel []>(this.baseUrl + this.songEndpoint);
    }

    public getSongRoute(index:number){
        return this.http.get< SongRouteListItemModel>(this.baseUrl + 'songs' + '/' + index + '.json');
    }
}