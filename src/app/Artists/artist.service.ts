import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArtistItemModel } from "./artists-item.model";

@Injectable({
    providedIn: 'root'
})
export class ArtistListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "artistlist.json";

    constructor(private http:HttpClient){

    }
    public getArtists(){
        return this.http.get<ArtistItemModel []>(this.baseUrl + this.songEndpoint);
    }

    public getArtist(index:number){
        return this.http.get<ArtistItemModel>(this.baseUrl + 'songs' + '/' + index + '.json');
    }
}