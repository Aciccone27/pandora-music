import { Component, Input } from "@angular/core";

@Component({
    selector: 'pandora-slist',
    templateUrl: 's_list.component.html',
    styleUrls: ['s_list.component.css']
})
export class SlistComponent{
    @Input() img: string;
    @Input() title: string;
    @Input() artist: string;
    @Input() number: string;

    constructor (){
        this.img = "";
        this.artist = "";
        this.title ="";
        this.number = "";
    }
}