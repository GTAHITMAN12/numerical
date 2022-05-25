import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';
@Component({
  selector: 'app-gaussjordan',
  templateUrl: './gaussjordan.component.html',
  styleUrls: ['./gaussjordan.component.css']
})
export class GaussjordanComponent implements OnInit {
round:number=0;
  submit:boolean=false;
  matrixshow:boolean=false;
  gaussj : FormGroup;
  submitted = false;
  result:any[]=[];
  x:any[] = [];
  constructor(private fb : FormBuilder) {
    this.gaussj=fb.group({
      round:[''],
      matrixA:new FormArray([]),
      matrixB:new FormArray([])
    });
   }

  ngOnInit(): void {
  }
  get  f() { return this.gaussj.controls; }
  get  mA() {return this.f['matrixA'] as FormArray; }
  get  mB() {return this.f['matrixB'] as FormArray; }
  get matrixAformgroup() {return this.mA.controls as FormGroup[];}
  get matrixBformgroup() {return this.mB.controls as FormGroup[];}
  showmatrix():void{
    this.matrixshow=true;
  }
  onChangeround(e:any) {
    this.submit=false;
    this.gaussj=this.fb.group({
      round:[''],
      matrixA:new FormArray([]),
      matrixB:new FormArray([])
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
  PerformOperation(a:number[][],n:number){
    let i, j, k = 0, c, flag = 0, m = 0;
    let pro = 0;
    // Performing elementary operations
    for (i = 0; i < n; i++)
    {
        if (a[i][i] == 0)
        {
            c = 1;
            while ((i + c) < n && a[i + c][i] == 0)
                c++;
            if ((i + c) == n)
            {
                flag = 1;
                break;
            }
            for (j = i, k = 0; k <= n; k++)
            {
                let temp =a[j][k];
                a[j][k] = a[j+c][k];
                a[j+c][k] = temp;
            }
        }

        for (j = 0; j < n; j++)
        {

            if (i != j)
            {


                let p = a[j][i] / a[i][i];

                for (k = 0; k <= n; k++)
                    a[j][k] = a[j][k] - (a[i][k]) * p;
            }
        }


    }
    return flag;
  }
  PrintResult(a:number[][],n:number,flag:number)
  {
      if(flag == 2){
          alert("Infinite Solutions Exists<br>");
          this.submit=false;
      }
      else if(flag == 3){
          alert("No Solution Exists<br>");
          this.submit=false;
      }
      else {
          this.submit=true;
          let index=0
          for (let i = 0; i < n; i++){
            var ans=a[i][n] / a[i][i];
            this.result.push({index,ans});
            index++;
          }

      }
  }

  CheckConsistency(a:number[][],n:number,flag:number)
  {
      let i, j;
      let sum;

      // flag == 2 for infinite solution
      // flag == 3 for No solution
      flag = 3;
      for (i = 0; i < n; i++)
      {
          sum = 0;
          for (j = 0; j < n; j++)
              sum = sum + a[i][j];
          if (sum == a[i][j])
              flag = 2;
      }
      return flag;
  }
  guassjordan()
  {
    var n=this.round
    var flag = 0;
    let i
    var index=0;
    let arr=[];
    let a:number[]=[];
    let aa=this.gaussj.value.matrixA;
    let bb=this.gaussj.value.matrixB;
    for(i=0;i<(aa.length+bb.length);i++){
      if(i<aa.length){
        a.push(aa[i].input);
      }
      if((i+1)%(this.round)==0 && index<bb.length){
        a.push(bb[index].input);
        index++;
      }
    }
    console.log(a);
    i=0;
    while(i<a.length){
      arr.push(a.splice(0,(this.round*1)+1));
      i++;
    }
    alert(arr);
    console.log(arr);
    console.log((this.round*1)+1);
    flag = this.PerformOperation(arr, n);
    if (flag == 1){
        flag = this.CheckConsistency(arr, n, flag);
    }
    this.PrintResult(arr, n, flag);
  }
  onSubmit(): void {
    if (this.gaussj.invalid) {
        return;
    }
    this.submit=true;
    alert(JSON.stringify(this.gaussj.value));
}
}
