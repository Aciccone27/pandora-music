import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { CarolItemModel } from "./carol-item.model";

@Injectable({
    providedIn: 'root'
})
export class CarolListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "carollist.json";

    constructor(private db: AngularFireDatabase){

    }
    public getCarols(){
        return this.db.list<CarolItemModel>("carollist").valueChanges();
    }

    public getCarol(index:number){
        
    }
}