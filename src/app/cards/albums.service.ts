import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { AlbumItemModel } from "./album-item.model";

@Injectable({
    providedIn: 'root'
})
export class AlbumListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "albumlist.json";

    constructor(private db: AngularFireDatabase){

    }
    public getAlbums(){
        return this.db.list<AlbumItemModel>("albumlist").valueChanges();
    }

    public getAlbum(index:number){
        
    }
}