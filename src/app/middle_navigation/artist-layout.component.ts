import { Component, OnInit } from "@angular/core";
import { ArtistListService } from "../Artists/artist.service";
import { ArtistItemModel } from "../Artists/artists-item.model";
import { AlbumItemModel } from "../cards/album-item.model";
import { AlbumListService } from "../cards/albums.service";



@Component({
    selector: 'pandora-artist',
    templateUrl: 'artist-layout.component.html',
    styleUrls: ['artist-layout.component.css']
})
export class ArtistLayoutComponent implements OnInit{
    albums: AlbumItemModel [] = [];
  artists: ArtistItemModel [] = [];

  constructor( private albumListService: AlbumListService, private artistListService: ArtistListService){

  }
  ngOnInit(): void {
    //for album covers
   this.albumListService.getAlbums().subscribe((data: AlbumItemModel []) => {
     console.log("Fetching song list data");
     for (var albums of data) {
       this.albums.push(albums);
     }
   })

   //for artists
   this.artistListService.getArtists().subscribe((data: ArtistItemModel []) => {
    console.log("Fetching song list data");
    for (var artists of data) {
      this.artists.push(artists);
    }
  })
}
}