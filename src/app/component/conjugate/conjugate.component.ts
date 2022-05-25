import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-conjugate',
  templateUrl: './conjugate.component.html',
  styleUrls: ['./conjugate.component.css']
})
export class ConjugateComponent implements OnInit {
  round:number=0;
  submit:boolean=false;
  matrixshow:boolean=false;
  conjugate : FormGroup
  submitted = false;
  ans:any[]=[];
  constructor(private fb : FormBuilder) {
    this.conjugate=fb.group({
      round:[''],
      matrixA:new FormArray([]),
      matrixB:new FormArray([]),
      matrixX:new FormArray([]),
    });
   }

  ngOnInit(): void {
  }
  get  f() { return this.conjugate.controls; }
  get  mA() {return this.f['matrixA'] as FormArray; }
  get  mB() {return this.f['matrixB'] as FormArray; }
  get  mX() {return this.f['matrixX'] as FormArray; }
  get matrixAformgroup() {return this.mA.controls as FormGroup[];}
  get matrixBformgroup() {return this.mB.controls as FormGroup[];}
  get matrixXformgroup() {return this.mX.controls as FormGroup[];}
  showmatrix():void{
    this.matrixshow=true;
  }
  onChangeround(e:any) {
    this.submit=false;
    this.conjugate=this.fb.group({
      round:[''],
      matrixA:new FormArray([]),
      matrixB:new FormArray([]),
      matrixX:new FormArray([]),
    });
    this.round = e.target.value || 0;
    if (this.mA.length < this.round) {
        for (let j = 0; j < this.round*this.round; j++) {
            this.mA.push(this.fb.group({
                input: [''],
            }))
        }
    } else {
        for (let i = this.mA.length; i >= this.round; i--) {
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
    if (this.mX.length < this.round) {
      for (let j = 0; j < this.round; j++) {
          this.mX.push(this.fb.group({
              input: [''],
          }))
      }
    } else {
        for (let i = this.mX.length; i >= this.round; i--) {
            this.mX.removeAt(i);
        }
    }
  }
  onSubmit(): void {
    if (this.conjugate.invalid) {
        return;
    }
    this.submit=true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.conjugate.value));
  }
  cal():void{
    let newArr:number[][] = [];
    let size=this.round;
    let a=this.conjugate.value.matrixA;
    let b=this.conjugate.value.matrixB;
    let x=this.conjugate.value.matrixX;
    console.log("b="+b);
    console.log("a="+a);
    console.log("x="+x);
    let aa=[];
    let bb=[];
    let xx:number[]=[];
    for(var i=0;i<a.length;i++){
      aa.push(a[i].input);
    }
    for(var i=0;i<b.length;i++){
      bb.push(b[i].input);
    }
    for(var i=0;i<x.length;i++){
      xx.push(x[i].input);
    }
    console.log(aa);
    console.log(bb);
    let matrixb = bb;
    console.log(matrixb);
    console.log(size);
    newArr=[];
    var i=0;
    while(i<aa.length){
      newArr.push(aa.splice(0,size));
      i++;
    }
    console.log(newArr);
    var A=newArr;
    var temp;
    var r:number[];
    var d:number[];
    var lamda:number;
    var alpha:number[];
    var eror:number;
    var ans=xx.map(a => a.toFixed(6));
    r=math.subtract(math.multiply(A,xx),bb)
    d=math.multiply(r,-1);
    eror=Math.sqrt(math.dot(r,math.abs(r)));
    if(eror<0.000001){
      this.ans.push({i:1,xx:ans,eror});
    }
    else
    {
      i=0;
      do{
        var dr=math.multiply(d,r);
        var da=math.multiply(d,A);
        lamda=(-dr)/math.dot(da,d);
        x=math.add(xx,(math.multiply(lamda,d)));
        r=math.subtract(math.multiply(A,xx),bb);
        alpha=math.multiply(math.multiply(r,A),d);
        d=math.add(math.multiply(r,-1),math.multiply(alpha,d));
        i++
        eror=Math.sqrt(math.dot(r,math.abs(r)));
        if(eror==temp){
          break;
        }
        ans=x.map((a: number) => a.toFixed(6));
        this.ans.push({i,ans,eror});
        console.log(eror);
        temp=eror;
      }while(eror>0.000001);
    }
    console.log(this.ans);
  }
}
