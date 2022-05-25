import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-guassseidal',
  templateUrl: './guassseidal.component.html',
  styleUrls: ['./guassseidal.component.css']
})
export class GuassseidalComponent implements OnInit {
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
  guassseidal()
  {
    this.array=[];
    var fx1:string=this.form.value.function1;
    var fx2:string=this.form.value.function2;
    var fx3:string=this.form.value.function3;
    var x1, y1, z1,x0, y0, z0, e1, e2, e3, e=0.000001,temp1,temp2,temp3;
    var count=0;
    console.log("\nCount\tx\ty\tz\n");
    do
    {
      x0=this.form.value.x0;
      y0=this.form.value.y0;
      z0=this.form.value.z0;
      var divide=this.form.value.divide;
      x1 = math.evaluate(fx1,{x:x0,y:y0,z:z0})/divide;

      y1 = math.evaluate(fx2,{x:x1,y:y0,z:z0})/divide;

      z1 = math.evaluate(fx3,{x:x1,y:y1,z:z0})/divide;

      var iteration=count+1
      console.log(x1,y1,z1);

      /* Error */
      e1 = Math.abs(x0-x1);
      e2 = Math.abs(y0-y1);
      e3 = Math.abs(z0-z1);
      console.log(e1,e2,e3);
      count++;
      if(e1==temp1 && e2==temp2 && e3==temp3){
        break;
      }
      temp1=e1;
      temp2=e2;
      temp3=e3;
      /* Set value for next iteration */
      x0 = x1;
      y0 = y1;
      z0 = z1;
      this.array.push({iteration,x1,y1,z1});

    }while(e1>e && e2>e && e3>e);
    console.log("\nSolution: x y z\n",x1,y1,z1);
  }
}
