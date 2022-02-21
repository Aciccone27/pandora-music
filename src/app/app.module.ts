import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { ArtistCardsComponent } from './Artists/artistcards.component';
import { BottomNavBarComponent } from './bottom_Navigation/bottomnavbar.component';
import { CardComponent } from './cards/card.component';
import { SongListComponent } from './Lists/songlist.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowseLayoutComponent } from './cards/browse-layout.component';
import { HomeLayoutComponent } from './cards/home-layout.component';
import { NowPlayingLayoutComponent } from './Lists/now-playing-layout.component';
import { ProfileLayoutComponent } from './navigation/profile-layout.component';
import { SettingsLayoutComponent } from './navigation/settings-layout.component';
import { HelpLayoutComponent } from './navigation/help-layout.component';
import { CommunityLayoutComponent } from './navigation/community-layout.component';
import { SignOutLayoutComponent } from './navigation/sign-out-layout.component';
import { MiddleNavBarComponent } from './middle_navigation/middlenavbar.component';
import { ArtistLayoutComponent } from './middle_navigation/artist-layout.component';
import { SongIconComponent } from './Lists/song-icon.component';
import { SongTitleComponent } from './Lists/song-title.component';
import { AlbumRouteComponent } from './album_route/album-route.component';
import { SongRouteComponent } from './song_route/song-route.component';
import { SlistComponent } from './song_route/s_list.component';
import { CarolComponent } from './cards/album-carol.component';
import { AlistComponent } from './album_route/a_list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CardComponent,
    BottomNavBarComponent,
    SongListComponent,
    ArtistCardsComponent,
    BrowseLayoutComponent,
    HomeLayoutComponent,
    NowPlayingLayoutComponent,
    ProfileLayoutComponent,
    SettingsLayoutComponent,
    HelpLayoutComponent,
    CommunityLayoutComponent,
    SignOutLayoutComponent,
    MiddleNavBarComponent,
    ArtistLayoutComponent,
    SongIconComponent,
    SongTitleComponent,
    AlbumRouteComponent,
    SongRouteComponent,
    SlistComponent,
    CarolComponent,
    AlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
