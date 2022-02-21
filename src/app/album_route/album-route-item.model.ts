export class AlbumRouteItemModel{
    img: string;
    title: string;
    artist: string;
    songs: number;
    explicit: string;

    constructor(img: string, title: string, artist: string, songs: number, explicit: string){
        this.img = img;
        this.title = title;
        this.artist = artist;
        this.songs = songs;
        this.explicit = explicit;
    }
}