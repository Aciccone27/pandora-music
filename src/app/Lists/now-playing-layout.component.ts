import { Component, OnInit } from "@angular/core";
import { SongListItemModel } from "./song-list-item.model";
import { SongListService } from "./songlist.sevice";

@Component({
  selector: 'pandora-nowPlaying',
  templateUrl: 'now-playing-layout.component.html',
  styleUrls: ['now-playing-layout.component.css']
})
export class NowPlayingLayoutComponent  implements OnInit{
  song: SongListItemModel[] = [];


  constructor(private songListService: SongListService) {

  }
  ngOnInit(): void {
    this.songListService.getSongs().subscribe((data: SongListItemModel []) => {
      console.log("Fetching song list data");
      for (var songs of data) {
        this.song.push(songs);
      }
    })
  }

}