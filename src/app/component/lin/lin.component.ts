import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-lin',
  templateUrl: './lin.component.html',
  styleUrls: ['./lin.component.css']
})
export class LinComponent implements OnInit {
  array:any[]=[];
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group( {
        function:[''],
        x0:[''],
        x1:[''],
        x:[''],
    });
  }
  ngOnInit(): void {
  }
  cal(){
    var fx=this.form.value.function;
    var x0:number=this.form.value.x0;
    var x1=this.form.value.x1;
    var x=this.form.value.x;
    var fn;
    fn = math.evaluate(fx,{x:x0}) + ((x-x0)*((math.evaluate(fx,{x:x1})-math.evaluate(fx,{x:x0}))/(x1-x0)));
    var T=math.evaluate(fx,{x:x});
    var eror =((T-fn)/T)*100;
    this.array.push({
        fn:fn.toFixed(6),
        error:eror.toFixed(2)
    });
  }
}
