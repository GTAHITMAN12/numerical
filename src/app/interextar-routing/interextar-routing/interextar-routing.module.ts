import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LilComponent } from 'src/app/component/lil/lil.component';
import { LinComponent } from 'src/app/component/lin/lin.component';
import { PinComponent } from 'src/app/component/pin/pin.component';
import { QilComponent } from 'src/app/component/qil/qil.component';
import { QinComponent } from 'src/app/component/qin/qin.component';

const routes: Routes = [
  {path:'LinComponent',component:LinComponent},
  {path:'QinComponent',component:QinComponent},
  {path:'PinComponent',component:PinComponent},
  {path:'LiLComponent Interpolation',component:LilComponent},
  {path:'QiLComponent Interpolation',component:QilComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class InterextarRoutingModule { }
