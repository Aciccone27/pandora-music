import { Component, Input} from "@angular/core";

@Component({
    selector: 'pandora-carol',
    templateUrl: 'album-carol.component.html',
    styleUrls: ['album-carol.component.css']
})
export class CarolComponent{
    @Input() img: string;
    

    constructor(){
        this.img = "";
    }
}