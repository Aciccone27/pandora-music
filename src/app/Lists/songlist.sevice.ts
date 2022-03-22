import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { SongListItemModel } from "./song-list-item.model";

@Injectable({
    providedIn: 'root'
})
export class SongListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "songslist.json";

    constructor(private db: AngularFireDatabase){

    }
    public getSongs(){
        return this.db.list<SongListItemModel>("songlist").valueChanges();
    }

    public getSong(index:number){
       
    }
}