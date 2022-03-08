import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlbumRouteItemModel } from "./album-route-item.model";

@Injectable({
    providedIn: 'root'
})
export class AlbumRouteListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "albumroutelist.json";

    constructor(private http:HttpClient){

    }
    public getAlbumroutes(){
        return this.http.get<AlbumRouteItemModel []>(this.baseUrl + this.songEndpoint);
    }

    public getAlbumroute(index:number){
        return this.http.get<AlbumRouteItemModel>(this.baseUrl + 'songs' + '/' + index + '.json');
    }
}