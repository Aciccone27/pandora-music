import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { BrowseLayoutComponent } from './cards/browse-layout.component';
import { HomeLayoutComponent } from './cards/home-layout.component';
import { NowPlayingLayoutComponent } from './Lists/now-playing-layout.component';
import { ProfileLayoutComponent } from './navigation/profile-layout.component';
import { SettingsLayoutComponent } from './navigation/settings-layout.component';
import { HelpLayoutComponent } from './navigation/help-layout.component';
import { CommunityLayoutComponent } from './navigation/community-layout.component';
import { SignOutLayoutComponent } from './navigation/sign-out-layout.component';
import { ArtistLayoutComponent } from './middle_navigation/artist-layout.component';
import { AlbumRouteComponent } from './album_route/album-route.component';
import { SongRouteComponent } from './song_route/song-route.component';
import { AddsongrouteComponent } from './song_route/addsongroute/addsongroute.component';
import { AddAlbumRouteComponent } from './album_route/add-album-route/add-album-route.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'browse', component: BrowseLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'now-playing', component: NowPlayingLayoutComponent},
  {path: 'profile', component: ProfileLayoutComponent},
  {path: 'settings', component: SettingsLayoutComponent},
  {path: 'help', component: HelpLayoutComponent},
  {path: 'community', component: CommunityLayoutComponent},
  {path: 'sign-out', component: SignOutLayoutComponent},
  {path: 'artist', component: ArtistLayoutComponent},
  {path: 'albums', component: AlbumRouteComponent},
  {path: 'songs', component: SongRouteComponent},
  {path: 'songRoute', component:AddsongrouteComponent},
  {path: 'albumRoute', component:AddAlbumRouteComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ]
})
export class AppRoutingModule { }
