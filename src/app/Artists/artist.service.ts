import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { ArtistItemModel } from "./artists-item.model";

@Injectable({
    providedIn: 'root'
})
export class ArtistListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "artistlist.json";

    constructor(private db: AngularFireDatabase){

    }
    public getArtists(){
        return this.db.list<ArtistItemModel>("artistlist").valueChanges();
    }

    public getArtist(index:number){
        
    }
}