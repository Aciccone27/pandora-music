import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlbumItemModel } from "./album-item.model";

@Injectable({
    providedIn: 'root'
})
export class AlbumListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "albumlist.json";

    constructor(private http:HttpClient){

    }
    public getAlbums(){
        return this.http.get<AlbumItemModel []>(this.baseUrl + this.songEndpoint);
    }

    public getAlbum(index:number){
        return this.http.get<AlbumItemModel>(this.baseUrl + 'songs' + '/' + index + '.json');
    }
}