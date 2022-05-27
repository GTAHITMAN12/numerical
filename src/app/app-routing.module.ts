import { InterExtarComponent } from './component/inter-extar/inter-extar.component';
import { LinearAppComponent } from './component/linear-app/linear-app.component';
import { RootAppComponent } from './component/root-app/root-app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';

import { AuthGuard } from "./shared/auth.guard";
import { loginComponent } from './component/signin/login.component';
import { RegisterComponent } from './component/signup/register.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: loginComponent },
  { path: 'sign-up', component: RegisterComponent },
  {path:'root',component:RootAppComponent ,canActivate: [AuthGuard]},
  {path:'linear',component:LinearAppComponent ,canActivate: [AuthGuard]},
  {path:'interpotation and extrapolation',component:InterExtarComponent,canActivate: [AuthGuard]},
  {path: 'profile', component: UserprofileComponent }
  /*{path:'linear regression',component:},*/
  /**/
  /*{path:'integation and diff',component:  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AppRoutingModule { }
