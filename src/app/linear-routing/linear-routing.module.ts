import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CholesskyComponent } from '../component/cholessky/cholessky.component';
import { ConjugateComponent } from '../component/conjugate/conjugate.component';
import { CramerRuleComponent } from '../component/cramer-rule/cramer-rule.component';
import { GaussComponent } from '../component/gauss/gauss.component';
import { GaussjordanComponent } from '../component/gaussjordan/gaussjordan.component';
import { GuassseidalComponent } from '../component/guassseidal/guassseidal.component';
import { JacobiComponent } from '../component/jacobi/jacobi.component';
import { LudecomposeComponent } from '../component/ludecompose/ludecompose.component';


const routes: Routes = [
  {path:'cramer_rule',component:CramerRuleComponent},
  {path:'gauss',component:GaussComponent},
  {path:'gaussj',component:GaussjordanComponent},
  {path:'LudecomposeComponent',component:LudecomposeComponent},
  {path:'cholesky',component:CholesskyComponent},
  {path:'jacoby',component:JacobiComponent},
  {path:'GuassseidalComponent',component:GuassseidalComponent},
  {path:'Conjugate',component:ConjugateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LinearRoutingModule { }
