import { Component, Input } from "@angular/core";

@Component({
    selector: 'pandora-alist',
    templateUrl: 'a_list.component.html',
    styleUrls: ['a_list.component.css']
})
export class AlistComponent{
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