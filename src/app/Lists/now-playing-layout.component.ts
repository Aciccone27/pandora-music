import { convertFromMaybeForwardRefExpression } from "@angular/compiler/src/render3/util";
import { Component } from "@angular/core";
import { mock_song_lists } from "./mock_song_list";
import { SongListItemModel } from "./song-list-item.model";
import { SongListService } from "./songlist.sevice";

@Component({
  selector: 'pandora-nowPlaying',
  templateUrl: 'now-playing-layout.component.html',
  styleUrls: ['now-playing-layout.component.css']
})
export class NowPlayingLayoutComponent {
  song: SongListItemModel[] = [];


  constructor(private songListService: SongListService) {

    //for song listscovers
    for (var song of mock_song_lists) {
      console.log(song);
      this.song.push(song);
    }

  }
  ngOnInit(): void {
    this.songListService.getSongs().subscribe(data => {
      console.log("Fetching song list data");
      for (var song of data) {
        console.log(song);
        this.song.push(song);
      }
    })
  }

}