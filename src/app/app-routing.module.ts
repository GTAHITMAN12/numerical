import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterExtarComponent } from './component/inter-extar/inter-extar.component';
import { LinearAppComponent } from './component/linear-app/linear-app.component';
import { RootAppComponent } from './component/root-app/root-app.component';
import { AuthGuard } from "./shared/auth.guard";
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  {path:'root',component:RootAppComponent ,canActivate: [AuthGuard]},
  {path:'linear',component:LinearAppComponent ,canActivate: [AuthGuard]},
  {path:'interpotation and extrapolation',component:InterExtarComponent ,canActivate: [AuthGuard]},
  /*{path:'linear regression',component:},*/
  /**/
  /*{path:'integation and diff',component:  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
