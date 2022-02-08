import { Component, Input } from "@angular/core";

@Component({
    selector: 'pandora-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent{
    @Input() img: string;
    @Input() title: string;
    @Input() artist: string;
    @Input() songs: number;

    constructor(){
        this.img = "";
        this.title = "blank";
        this.artist = "loading";
        this.songs = 0;
    }

}