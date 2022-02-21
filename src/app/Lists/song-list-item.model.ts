export class SongListItemModel{
    time: string;
    artist: string;
    songs: string;
    number: number;

    constructor( artist: string, song: string, time: string, number: number){
        this.songs = song;
        this.artist = artist;
        this.time = time;
        this.number = number;
    }
}