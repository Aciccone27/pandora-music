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

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'browse', component: BrowseLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'now-playing', component: NowPlayingLayoutComponent},
  {path: 'profile', component: ProfileLayoutComponent},
  {path: 'settings', component: SettingsLayoutComponent},
  {path: 'help', component: HelpLayoutComponent},
  {path: 'community', component: CommunityLayoutComponent},
  {path: 'sign-out', component: SignOutLayoutComponent}
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
