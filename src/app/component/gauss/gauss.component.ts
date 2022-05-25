import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-gauss',
  templateUrl: './gauss.component.html',
  styleUrls: ['./gauss.component.css']
})
export class GaussComponent implements OnInit {
  round:number=0;
  submit:boolean=false;
  matrixshow:boolean=false;
  gauss : FormGroup;
  submitted = false;
  result:any[]=[];
  x:any[] = [];
  constructor(private fb : FormBuilder) {
    this.gauss=fb.group({
      round:[''],
      matrixA:new FormArray([]),
      matrixB:new FormArray([])
    });
   }

  ngOnInit(): void {
  }
  get  f() { return this.gauss.controls; }
  get  mA() {return this.f['matrixA'] as FormArray; }
  get  mB() {return this.f['matrixB'] as FormArray; }
  get matrixAformgroup() {return this.mA.controls as FormGroup[];}
  get matrixBformgroup() {return this.mB.controls as FormGroup[];}
  showmatrix():void{
    this.matrixshow=true;
  }
  onChangeround(e:any) {
    this.submit=false;
    this.gauss=this.fb.group({
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
        for (let i = this.mA.length; i >= this.round; i--) {
            this.mA.removeAt(i);
        }
    }
    if (this.mB.length < this.round) {
      for (let k = 0; k < this.round; k++) {
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

  diagonalize(M:number[][]) {
    var m = M.length;
    var n = M[0].length;
    for(var k=0; k<Math.min(m,n); ++k) {
      // Find the k-th pivot
      var i_max:number = this.findPivot(M, k);
      if (M[i_max][k] == 0)
        alert("matrix is singular");
      this.swap_rows(M, k, i_max);
      // Do for all rows below pivot
      for(var i=k+1; i<m; ++i) {
        // Do for all remaining elements in current row:
        var c = M[i][k] / M[k][k];
        for(var j=k+1; j<n; ++j) {
          M[i][j] = M[i][j] - M[k][j] * c;
        }
        // Fill lower triangular matrix with zeros
        M[i][k] = 0;
      }
    }
  }

  findPivot(M:number[][], k:number) {
    var i_max = k;
    for(var i=k+1; i<M.length; ++i) {
      if (Math.abs(M[i][k]) > Math.abs(M[i_max][k])) {
        i_max = i;
      }
    }
    return i_max;
  }

  swap_rows(M:number[][], i_max:number, k:number) {
    if (i_max != k) {
      var temp = M[i_max];
      M[i_max] = M[k];
      M[k] = temp;
    }
  }

  makeM(A:number[][], b:number[]) {
    for(var i=0; i<A.length; ++i) {
      A[i].push(b[i]);
    }
  }

  substitute(M:number[][]) {
    var m = M.length;
    for(var i=m-1; i>=0; --i) {
      var x = M[i][m] / M[i][i];
      for(var j=i-1; j>=0; --j) {
        M[j][m] -= x * M[j][i];
        M[j][i] = 0;
      }
      M[i][m] = x;
      M[i][i] = 1;
    }
  }

  solve(A:number[][], b:number[]):void {
    //print(A, "A");
    this.makeM(A,b);
    //print(A, "M");
    this.diagonalize(A);
    //print(A, "diag");
    this.substitute(A);
    //print(A, "subst");
    //print(x, "x");
    var m = A.length;
    var n = A[0].length;
    for(var i=0; i<m; ++i){
      let ans=A[i][n-1].toFixed(6);
      this.x.push({i,ans});
    }
    console.log(this.x);
  }
  PerformOperation():void
  {
    let n=this.round;
    let i
    let arr=[];
    let a:number[]=[];
    let b:number[]=[];
    let aa=this.gauss.value.matrixA;
    let bb=this.gauss.value.matrixB;
    for(i=0;i<aa.length;i++){
      a.push(aa[i].input);
    }
    for(i=0;i<bb.length;i++){
      b.push(bb[i].input);
    }
    console.log(a);
    console.log(b);
    while(i<a.length){
      arr.push(a.splice(0,n));
      i++;
    }
    alert(arr);
    console.log(arr);
    this.solve(arr,b);
    // Performing elementary operations

  }
  onSubmit(): void {
      if (this.gauss.invalid) {
          return;
      }
      this.submit=true;
      alert(JSON.stringify(this.gauss.value));
  }
}
