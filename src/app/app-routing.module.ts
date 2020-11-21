import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

///////////////////////////Routing//////////////////////////

import { HomeComponent } from './home/home.component'
import { Ques3Component } from './ques3/ques3.component'
import { Ques1Component } from './ques1/ques1.component'
import { CompoOneComponent } from './compo-one/compo-one.component'
import { CompotwoComponent } from './compotwo/compotwo.component'
import { CompothreeComponent } from './compothree/compothree.component'
import { CompofourComponent } from './compofour/compofour.component'


const routes: Routes = [

  {
    path:"",
    component:Ques1Component
  },

 {
   path:"home",
   component:HomeComponent
 },

 {
   path:"ques3",
   component:Ques3Component
 },

 {
   path:"compoOne",
   component:CompoOneComponent
 },

 {
  path:"compotwo",
  component:CompotwoComponent
},

{
  path:"compothree",
  component:CompothreeComponent
},

{
  path:"compofour",
  component:CompofourComponent
},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
