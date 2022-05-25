import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';
import { string } from 'mathjs';

@Component({
  selector: 'app-secant',
  templateUrl: './secant.component.html',
  styleUrls: ['./secant.component.css']
})
export class SecantComponent implements OnInit {
  array:any[]=[];
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group( {
        function:[''],
        x0:[''],
        x1:['']
    });
  }
  ngOnInit(): void {
  }
  secant(){
    var fx:string=this.form.value.function;
    var x0:number=this.form.value.x0;
    var x1:number=this.form.value.x1;
    const f = (fx:string, value:number) => math.parse(fx).evaluate({ x: value })
    const eror = (xm:number, prexm:number) => Math.abs((xm - prexm) / xm)

    var i = 0, xm = 0, prexm
    while (true) {

      prexm = xm

      xm = x1 - ( (f(fx,x1)* (x0-x1)) / (f(fx,x0)-f(fx,x1)) )

      this.array.push({
        i: i,
        xm: xm.toFixed(6),
        fxm: f(fx, xm).toFixed(6),
        error: eror(xm, prexm).toFixed(6)
      });

        if(eror(xm, prexm) <= 0.000001){

          break;

        }

      x0 = x1
      x1 = xm
      i++;
    }
  }
}
