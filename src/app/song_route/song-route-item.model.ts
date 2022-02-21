export class SongRouteListItemModel{
    img: string;
    title: string;
    artist: string;
    number: string;

    constructor( img: string, artist: string, title: string,  number: string){
        this.img = img;
        this.title = title;
        this.artist = artist;
        this.number = number;
    }
}