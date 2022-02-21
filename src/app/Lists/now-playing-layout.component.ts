import { Component, Input } from "@angular/core";
import { mock_song_lists } from "./mock_song_list";
import { SongListItemModel } from "./song-list-item.model";

@Component({
    selector: 'pandora-nowPlaying',
    templateUrl: 'now-playing-layout.component.html',
    styleUrls: ['now-playing-layout.component.css']
})
export class NowPlayingLayoutComponent{
    song: SongListItemModel [] = [];
    
  
    constructor(){
  
      //for song listscovers
      for (var song of mock_song_lists){
        console.log(song);
        this.song.push(song);
      }
     
    }
    
}