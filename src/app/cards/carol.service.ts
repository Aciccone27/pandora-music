import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarolItemModel } from "./carol-item.model";

@Injectable({
    providedIn: 'root'
})
export class CarolListService{
    private baseUrl:string = "https://pandora-music-4d9c8-default-rtdb.firebaseio.com/";
    private songEndpoint: string = "carollist.json";

    constructor(private http:HttpClient){

    }
    public getCarols(){
        return this.http.get<CarolItemModel []>(this.baseUrl + this.songEndpoint);
    }

    public getCarol(index:number){
        return this.http.get<CarolItemModel>(this.baseUrl + 'songs' + '/' + index + '.json');
    }
}