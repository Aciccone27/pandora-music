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
    NowPlayingLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
