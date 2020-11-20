import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

///////////////////////////Routing//////////////////////////

import { HomeComponent } from './home/home.component'
import { Ques3Component } from './ques3/ques3.component'

const routes: Routes = [
//  {
//    path:"",
//    component:HomeComponent
//  },

 {
   path:"",
   component:Ques3Component
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
