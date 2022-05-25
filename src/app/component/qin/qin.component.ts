import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-qin',
  templateUrl: './qin.component.html',
  styleUrls: ['./qin.component.css']
})
export class QinComponent implements OnInit {
  array:any[]=[];
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group( {
        function:[''],
        number:[''],
        x0:[''],
        x2:[''],
        x:[''],
    });
  }
  ngOnInit(): void {
  }
  cal(){
    var fx=this.form.value.function;
    var x0:number=this.form.value.x0;
    var x1:number=this.form.value.x1;
    var x2:number=this.form.value.x2;
    var x:number=this.form.value.x;
    var fn;
    var c0 = math.evaluate(fx,{x:x0})
    var c1 = (math.evaluate(fx,{x:x1})-math.evaluate(fx,{x:x0}))/(x1-x0)
    var c2 = ((math.evaluate(fx,{x:x2})-math.evaluate(fx,{x:x1}))/(x2-x1) - c1) / (x2-x0)
    var fn = c0+(c1*(x-x0))+(c2*(x-x0)*(x-x1))
    const T=math.evaluate(fx,{x:x})
    var eror =((T-fn)/T)*100;
    this.array.push({
        fn:fn.toFixed(6),
        error:eror.toFixed(2)
    });
  }
}
