export class AlbumItemModel{
    img: string;
    title: string;
    artist: string;
    songs: number;

    constructor(img: string, title: string, artist: string, songs: number){
        this.img = img;
        this.title = title;
        this.artist = artist;
        this.songs = songs;
    }
}