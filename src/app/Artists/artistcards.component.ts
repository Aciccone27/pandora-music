import { Component, Input } from "@angular/core";

@Component({
    selector: 'pandora-artistcards',
    templateUrl: 'artistcards.component.html',
    styleUrls: ['artistcards.component.css']
})
export class ArtistCardsComponent{
    @Input() img: string;
    @Input() artist: string;

    constructor(){
        this.img = "";
        this.artist = "loading";
    }

}
