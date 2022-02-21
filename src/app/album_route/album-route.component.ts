import { Component, Input } from "@angular/core";

@Component({
    selector: 'pandora-albumroute',
    templateUrl: 'album-route.component.html',
    styleUrls: ['album-route.component.css']
})
export class AlbumRouteComponent{
    @Input() img: string;
    @Input() title: string;
    @Input() artist: string;
    @Input() songs: number;
    @Input() explicit: string;

    constructor (){
        this.img = "";
        this.artist = "";
        this.title ="";
        this.songs = 0;
        this.explicit = "";
    }
}