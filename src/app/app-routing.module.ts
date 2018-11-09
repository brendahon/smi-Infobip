import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReplyComponent } from './reply/reply.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reply', component: ReplyComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SlimLoadingBarModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
