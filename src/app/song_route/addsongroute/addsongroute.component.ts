import { Component, OnInit } from '@angular/core';
import { SongRouteListItemModel } from '../song-route-item.model';

@Component({
  selector: 'pandora-addsongroute',
  templateUrl: './addsongroute.component.html',
  styleUrls: ['./addsongroute.component.css']
})
export class AddsongrouteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addSongRoute(song: SongRouteListItemModel ){
    console.log("You clicked add song");
    console.log(song);
  }

}
