import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-newton-raphson',
  templateUrl: './newton-raphson.component.html',
  styleUrls: ['./newton-raphson.component.css']
})
export class NewtonRaphsonComponent implements OnInit {
  array:any[]=[];
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group( {
        function:[''],
        start:['']
    });
  }
  ngOnInit(): void {
  }
  newton(){
    const f = (fx:string, value:number) => math.parse(fx).evaluate({ x: value })
    const eror = (x0:number, prex:number) => Math.abs((x0 - prex) / x0)
    var error=0;
    var i = 0, prex ,del
    var preeror:number=0;
    var fx:string=this.form.value.function;
    var x0:number=this.form.value.start;
    while (true) {
      prex = x0
      del = - (f(fx,x0)/(x0*2))
      error=eror(x0, prex);
      x0 = prex + del
      this.array.push({
        i: i,
        x: prex.toFixed(6),
        fx: f(fx, x0).toFixed(6),
        error: eror(x0, prex).toFixed(6)
      });
      i++;

      if(eror(x0, prex) <= 0.000001){
        break;
      }
    }
    console.log(this.array);
  }
}
