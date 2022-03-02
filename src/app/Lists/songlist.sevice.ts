import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SongListItemModel } from "./song-list-item.model";

@Injectable({
    providedIn: 'root'
})
export class SongListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/songslist.json";
    private songEndpoint: string = "song.json";

    constructor(private http:HttpClient){

    }
    public getSongs(){
        return this.http.get<SongListItemModel []>(this.baseUrl + this.songEndpoint);
    }
}