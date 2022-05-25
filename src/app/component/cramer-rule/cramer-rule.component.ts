import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';
@Component({
  selector: 'app-cramer-rule',
  templateUrl: './cramer-rule.component.html',
  styleUrls: ['./cramer-rule.component.css']
})
export class CramerRuleComponent implements OnInit {
  round:number=0;
  submit:boolean=false;
  matrixshow:boolean=false;
  cramer : FormGroup
  submitted = false;
  ans:any[]=[];
  constructor(private fb : FormBuilder) {
    this.cramer=fb.group({
      round:[''],
      matrixA:new FormArray([]),
      matrixB:new FormArray([])
    });
   }

  ngOnInit(): void {
  }
  get  f() { return this.cramer.controls; }
  get  mA() {return this.f['matrixA'] as FormArray; }
  get  mB() {return this.f['matrixB'] as FormArray; }
  get matrixAformgroup() {return this.mA.controls as FormGroup[];}
  get matrixBformgroup() {return this.mB.controls as FormGroup[];}
  showmatrix():void{
    this.matrixshow=true;
  }
  onChangeround(e:any) {
    this.submit=false;
    this.cramer=this.fb.group({
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
  }
  onSubmit(): void {
        if (this.cramer.invalid) {
            return;
        }
        this.submit=true;
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.cramer.value));
  }
  cal():void{
      let newArr:number[][] = [];
      let size=this.round;
      let a=this.cramer.value.matrixA;
      let b=this.cramer.value.matrixB;
      console.log("b="+b);
      console.log("a="+a);
      let aa:number[]=[];
      let bb:number[]=[];
      for(var i=0;i<a.length;i++){
        aa.push(a[i].input);
      }
      for(var i=0;i<b.length;i++){
        bb.push(b[i].input);
      }
      console.log(aa);
      console.log("bb="+bb);
      let matrixb = bb;
      console.log(matrixb);
      console.log(size);
      newArr=[];
      var i=0;
      while(i<aa.length){
        newArr.push(aa.splice(0,size));
        i++;
      }
      const pub=newArr;
    for(var j=0;j<this.round;j++){
      let newArr:number[][] = [];
      let detAi:number[][];
      let upper:number;
      let lower:number=0;
      let deta:number;
      let result:number;
      let rowIndex:number=0;
      let size=this.round;
      let a=this.cramer.value.matrixA;
      let b=this.cramer.value.matrixB;
      console.log("b="+b);
      console.log("a="+a);
      let aa:number[]=[];
      let bb:number[]=[];
      for(var i=0;i<a.length;i++){
        aa.push(a[i].input);
      }
      for(var i=0;i<b.length;i++){
        bb.push(b[i].input);
      }
      console.log(aa);
      console.log("bb="+bb);
      let matrixb = bb;
      console.log(matrixb);
      console.log(size);
      newArr=[];
      var i=0;
      while(i<aa.length){
        newArr.push(aa.splice(0,size));
        i++;
      }
      detAi=this.deti(j,newArr,matrixb);
      upper=math.det(math.matrix(detAi));
      lower=math.det(math.matrix(pub));
      deta=lower;
      result=(upper/lower);
      rowIndex++;
      this.ans.push({rowIndex,upper,lower,result});
    }
    console.log(this.ans);
  }
  deti(cl:number,x:number[][],matrix2:number[]):number[][]{
    console.log(x);
    for(var j=0;j<this.round;j++){
      x[j][cl]=matrix2[j];
    }
    console.log(x);
    return x;
  }
}
