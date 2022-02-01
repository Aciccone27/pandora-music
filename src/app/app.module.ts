import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './bottom_Navigation/bottomnavbar.component';
import { CardComponent } from './cards/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CardComponent,
    BottomNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
