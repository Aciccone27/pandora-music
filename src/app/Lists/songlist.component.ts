import { Component, Input } from "@angular/core";

@Component({
    selector: 'pandora-songlist',
    templateUrl: 'songlist.component.html',
    styleUrls: ['songlist.component.css']
})
export class SongListComponent{
    @Input() time: string;
    @Input() song: string;
    @Input() artist: string;
    @Input() number: number;

    constructor (){
        this.song = "";
        this.artist = "";
        this.time ="";
        this.number = 0;
    }
}