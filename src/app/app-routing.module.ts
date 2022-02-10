import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { BrowseLayoutComponent } from './cards/browse-layout.component';

const routes:Routes = [
  {path: 'browse', component: BrowseLayoutComponent}
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
