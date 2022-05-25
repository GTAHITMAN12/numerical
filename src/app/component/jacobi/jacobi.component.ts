import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-jacobi',
  templateUrl: './jacobi.component.html',
  styleUrls: ['./jacobi.component.css']
})
export class JacobiComponent implements OnInit {
  array:any[]=[];
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group( {
        function1:[''],
        function2:[''],
        function3:[''],
        x0:[''],
        y0:[''],
        z0:[''],
        divide:[''],
    });
  }

  ngOnInit(): void {
  }

/* Main function */
  jacobi()
  {
    var fx1:string=this.form.value.function1;
    var fx2:string=this.form.value.function2;
    var fx3:string=this.form.value.function3;
    var x1, y1, z1, e1, e2, e3, e=0.000001;
    var count=0;
    var scope={
      x:this.form.value.x0,y:this.form.value.y0,z:this.form.value.z0
    }
    console.log("\nCount\tx\ty\tz\n");
    do
    {
      var divide=this.form.value.divide;
      x1 = math.evaluate(fx1,scope)/divide;
      y1 = math.evaluate(fx2,scope)/divide;
      z1 = math.evaluate(fx3,scope)/divide;
      var iteration=count+1
      console.log(x1,y1,z1);

      /* Error */
      e1 = Math.abs(scope.x-x1);
      e2 = Math.abs(scope.y-y1);
      e3 = Math.abs(scope.z-z1);
      console.log(e1,e2,e3);
      count++;

      /* Set value for next iteration */
      scope.x = x1;
      scope.y = y1;
      scope.z = z1;
      this.array.push({iteration,x1,y1,z1});
    }while(e1>e && e2>e && e3>e);
    console.log("\nSolution: x y z\n",x1,y1,z1);
  }
}
