import { Component, Input } from "@angular/core";

@Component({
    selector: 'pandora-songroute',
    templateUrl: 'song-route.component.html',
    styleUrls: ['song-route.component.css']
})
export class SongRouteComponent{
    @Input() img: string;
    @Input() title: string;
    @Input() artist: string;
    @Input() number: number;

    constructor (){
        this.img = "";
        this.artist = "";
        this.title ="";
        this.number = 0;
    }
}