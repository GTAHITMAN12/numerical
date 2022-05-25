import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BisectionMethodComponent } from '../component/bisection-method/bisection-method.component';
import { GraphicalMethodComponent } from '../component/graphical-method/graphical-method.component';
import { NewtonRaphsonComponent } from '../component/newton-raphson/newton-raphson.component';
import { OneFalsePositionComponent } from '../component/one-false-position/one-false-position.component';
import { SecantComponent } from '../component/secant/secant.component';


const routes: Routes = [
  {path:'graphical_method',component:GraphicalMethodComponent },
  {path:'bisection_method',component:BisectionMethodComponent},
  {path:'newton-NewtonRaphsonComponent',component:NewtonRaphsonComponent},
  {path:'one_false_position',component:OneFalsePositionComponent },
  {path:'secant',component:SecantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
