import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterExtarComponent } from './component/inter-extar/inter-extar.component';
import { LinearAppComponent } from './component/linear-app/linear-app.component';
import { RootAppComponent } from './component/root-app/root-app.component';

const routes: Routes = [
  {path:'root',component:RootAppComponent },
  {path:'linear',component:LinearAppComponent },
  {path:'interpotation and extrapolation',component:InterExtarComponent},
  /*{path:'linear regression',component:},*/
  /**/
  /*{path:'integation and diff',component:  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
