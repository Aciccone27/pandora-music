import { Component, Input } from "@angular/core";

@Component({
    selector: 'pandora-artistcard',
    templateUrl: 'artistcards.component.html',
    styleUrls: ['artistcards.component.css']
})
export class ArtistCardComponent{
    @Input() img: string;
    @Input() artist: string;
   

    constructor(){
        this.img = "";
        this.artist = "loading";
    }

}