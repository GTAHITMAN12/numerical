import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';
import { lusolve } from 'mathjs';
@Component({
  selector: 'app-cholessky',
  templateUrl: './cholessky.component.html',
  styleUrls: ['./cholessky.component.css']
})
export class CholesskyComponent implements OnInit {
  round:number=0;
  submit:boolean=false;
  matrixshow:boolean=false;
  LU : FormGroup;
  submitted = false;
  result:any[]=[];
  x:any;
  constructor(private fb : FormBuilder) {
    this.LU=fb.group({
      round:[''],
      matrixA:new FormArray([]),
      matrixB:new FormArray([])
    });
   }

  ngOnInit(): void {
  }
  get  f() { return this.LU.controls; }
  get  mA() {return this.f['matrixA'] as FormArray; }
  get  mB() {return this.f['matrixB'] as FormArray; }
  get matrixAformgroup() {return this.mA.controls as FormGroup[];}
  get matrixBformgroup() {return this.mB.controls as FormGroup[];}
  showmatrix():void{
    this.matrixshow=true;
  }
  onChangeround(e:any) {
    this.submit=false;
    this.LU=this.fb.group({
      round:[''],
      matrixA:new FormArray([]),
      matrixB:new FormArray([]),
    });
    this.round = e.target.value || 0;
    if (this.mA.length < this.round) {
        for (let j = 0; j < this.round*this.round; j++) {
            this.mA.push(this.fb.group({
                input: [''],
            }))
        }
    } else {
        for (let i = this.mA.length; i >= this.round*this.round; i--) {
            this.mA.removeAt(i);
        }
    }
    if (this.mB.length < this.round) {
      for (let j = 0; j < this.round; j++) {
          this.mB.push(this.fb.group({
              input: [''],
          }))
      }
    } else {
        for (let i = this.mB.length; i >= this.round; i--) {
            this.mB.removeAt(i);
        }
    }
  }
  Cholesky_Decomposition(matrix:number[][]):any
  {
    var r=math.lup(matrix);
    return r.L;
  }
  linersolve(lower:number[][],lowertrans:number[][],B:number[]):number[]{
    var Y:number[]=[];
    var X:number[]=[];
    var sum=0;
    var divide=lower[0][0];
    for(var i=0;i<lower.length;i++){
      sum=0;
      for(var j=0;j<i+1;j++){
        if(i!=j){
          sum=sum+(lower[i][j]*B[j]);
        }
        divide=lower[i][j];
      }
      Y.push((sum+B[i])/divide);
    }
    console.log("Y:");
    console.log(Y);
    for(var i=lowertrans.length-1;i>=0;i--){
      console.log("i="+i);
      sum=0;
      for(var j=lowertrans.length-1;j>=i;j--){
        console.log("j="+j);
        if(i!=j){
          sum=sum+(lower[i][j]*Y[i]);
        }
        divide=lower[i][j];

      }
      var result=(sum+Y[i])/divide;
      X.push(result);
    }
    console.log(lowertrans.length);
    return X;
  }
  LUdecompose(){
    var n:number=this.round;
    let i;
    let A=[];
    let a:number[]=[];
    let b:number[]=[];
    let aa=this.LU.value.matrixA;
    let bb=this.LU.value.matrixB;
    for(i=0;i<aa.length;i++){
      a.push(aa[i].input);
    }
    for(i=0;i<bb.length;i++){
      b.push(bb[i].input);
    }
    console.log(a);
    console.log(b);
    i=0;
    while(i<a.length){
      A.push(a.splice(0,n));
      i++;
    }
    i=0;
    console.log(n);
    console.log(A);
    console.log(b);
    var L=this.Cholesky_Decomposition(A);
    console.log(L);
    var Lt=math.transpose(L);
    console.log(Lt);
    var ans:number[]=this.linersolve(L,Lt,b);
    console.log(ans);
    while(i<this.round){
      this.result.push({i,x:ans[i]});
      i++;
    }

  }

  onSubmit(): void {
    if (this.LU.invalid) {
        return;
    }
    this.submit=true;
    alert(JSON.stringify(this.LU.value));
  }
}
