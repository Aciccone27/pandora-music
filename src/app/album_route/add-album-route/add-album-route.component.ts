import { Component, OnInit } from '@angular/core';
import { AlbumRouteItemModel } from '../album-route-item.model';
import { AlbumRouteListService } from '../album_route.service';

@Component({
  selector: 'pandora-add-Album-Route',
  templateUrl: './add-album-route.component.html',
  styleUrls: ['./add-album-route.component.css']
})
export class AddAlbumRouteComponent implements OnInit {

  constructor(private ar:AlbumRouteListService) { }

  ngOnInit(): void {
  }

  addAlbumRoute(album: AlbumRouteItemModel ){
   
    this.ar.addAlbumRoute(album);
  }

}
