import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {
  array:any[]=[];
  form:FormGroup;
  submit:boolean=false;
  matrixshow:boolean=false;
  submitted = false;
  number: number=0;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group( {
        function:[''],
        number:[''],
         x:[''],
        xi:new FormArray([]),

    });
  }
  ngOnInit(): void {
  }
  get  f() { return this.form.controls; }
  get  x() {return this.f['x'] as FormArray; }
  get  xformgroup() {return this.x.controls as FormGroup[];}
  onChangeround(e:any) {
    this.submit=false;
    this.form=this.fb.group({
      function:[''],
      number:[''],
      x:new FormArray([]),
    });
    this.number = e.target.value || 0;
    if (this.x.length < this.number) {
        for (let j = 0; j < this.number; j++) {
            this.x.push(this.fb.group({
                input: [''],
            }))
        }
    } else {
        for (let i = this.x.length; i >= this.number; i--) {
            this.x.removeAt(i);
        }
    }
  }
  cal(){
    var n:number=this.number;
    var fx=this.form.value.function;
    var x:number=this.form.value.x;
    var arr=this.form.value.xi;
    var T=math.evaluate(fx,{x:x})
    console.log(T);
    var fn:number;
    var arrayx:number[]=[];
    var arrayy:number[]=[];
    arrayx=Array(this.number).fill(0);
    arrayy=Array(this.number).fill(0);
    for(var i=0;i<arr.length;i++){
        arrayx[i]=arr[i].input;
      }
    for(var i=0;i<arr.length;i++){
        arrayy[i]=math.evaluate(fx,{x:arrayx[i]});
      }
    fn = arrayy[0];
    var c,i=0,round = 1,q=1;
    for(var j=n;j!=1;j--){
      for(i=0;i<=n;i++){
        c = (arrayy[i+1]-arrayy[i])/(arrayx[i+round]-arrayx[i])
        arrayy[i] = c
      }

      for(var k=0;k<round;k++){

        q=q*(this.form.value.x-arrayx[k])

      }
      q=q*arrayy[0]
      fn = fn+q;
      var eror =((T-fn)/T)*100;
      this.array.push({ans:q.toFixed(6),error:eror.toFixed(2)});
      round++
      n--;
      q=1
    }

  }
}
