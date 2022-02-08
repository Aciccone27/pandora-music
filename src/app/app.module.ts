import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { ArtistCardComponent } from './Artists/artistcards.component';
import { BottomNavBarComponent } from './bottom_Navigation/bottomnavbar.component';
import { CardComponent } from './cards/card.component';
import { SongListComponent } from './Lists/songlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CardComponent,
    BottomNavBarComponent,
    SongListComponent,
    ArtistCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
