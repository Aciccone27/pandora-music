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
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddsongrouteComponent } from './song_route/addsongroute/addsongroute.component';
import { FormsModule } from '@angular/forms';
import { AddAlbumRouteComponent } from './album_route/add-album-route/add-album-route.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    AlistComponent,
    UserInfoComponent,
    AddsongrouteComponent,
    AddAlbumRouteComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
