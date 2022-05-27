import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphicalMethodComponent } from './component/graphical-method/graphical-method.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { BisectionMethodComponent } from './component/bisection-method/bisection-method.component';
import { OneFalsePositionComponent } from './component/one-false-position/one-false-position.component';
import { OnePointIterationComponent } from './component/one-point-iteration/one-point-iteration.component';
import { CramerRuleComponent } from './component/cramer-rule/cramer-rule.component';
import { RootAppComponent } from './component/root-app/root-app.component';
import { LinearAppComponent } from './component/linear-app/linear-app.component';
import { RootRoutingModule } from './root-routing/root-routing.module';
import { LinearRoutingModule } from './linear-routing/linear-routing.module';
import { GaussComponent } from './component/gauss/gauss.component';
import { GaussjordanComponent } from './component/gaussjordan/gaussjordan.component';
import { SecantComponent } from './component/secant/secant.component';
import { LudecomposeComponent } from './component/ludecompose/ludecompose.component';
import { CholesskyComponent } from './component/cholessky/cholessky.component';
import { JacobiComponent } from './component/jacobi/jacobi.component';
import { GuassseidalComponent } from './component/guassseidal/guassseidal.component';
import { ConjugateComponent } from './component/conjugate/conjugate.component';
import { NewtonRaphsonComponent } from './component/newton-raphson/newton-raphson.component';
import { InterExtarComponent } from './component/inter-extar/inter-extar.component';
import { LinComponent } from './component/lin/lin.component';
import { InterextarRoutingModule } from './interextar-routing/interextar-routing/interextar-routing.module';
import { QinComponent } from './component/qin/qin.component';
import { PinComponent } from './component/pin/pin.component';
import { LilComponent } from './component/lil/lil.component';
import { QilComponent } from './component/qil/qil.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './component/signup/register.component';
import { LoginComponent } from './component/signin/login.component';



@NgModule({
  declarations: [
    AppComponent,
    GraphicalMethodComponent,
    BisectionMethodComponent,
    OneFalsePositionComponent,
    OnePointIterationComponent,
    CramerRuleComponent,
    RootAppComponent,
    LinearAppComponent,
    GaussComponent,
    GaussjordanComponent,
    SecantComponent,
    LudecomposeComponent,
    CholesskyComponent,
    JacobiComponent,
    GuassseidalComponent,
    ConjugateComponent,
    NewtonRaphsonComponent,
    InterExtarComponent,
    LinComponent,
    QinComponent,
    PinComponent,
    LilComponent,
    QilComponent,
    RegisterComponent,
    UserprofileComponent,
    LoginComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootRoutingModule,
    LinearRoutingModule,
    ReactiveFormsModule,
    InterextarRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    HttpClientModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
