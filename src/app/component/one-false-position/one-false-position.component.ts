import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';
import { values } from './value';

@Component({
  selector: 'app-one-false-position',
  templateUrl: './one-false-position.component.html',
  styleUrls: ['./one-false-position.component.css']
})
export class OneFalsePositionComponent implements OnInit {
  array:values[]=[];
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group( {
        function:[''],
        start:[''],
        end:[''],
    });
  }
  ngOnInit(): void {
  }
  doit():void{
    this.array=[];
    const fx=this.form.value.function;
    const parser = math.parser();
    let Xm:number,Xr:number,Xl:number,temp:number;
    let fxm:number,fxr:number,fxl:number;
    Xr=this.form.value.end;
    Xl=this.form.value.start;
    Xm=(Xl+Xr)/2;
    console.log("xm",Xm);
    do{
      console.log("doloop");
      parser.set('x',Xr);
      fxl=parser.evaluate(fx);
      console.log("fxl",fxl);
      parser.set('x',Xl);
      fxr=parser.evaluate(fx);
      console.log("fxr",fxr);
      parser.set('x',Xm);
      fxm=parser.evaluate(fx);
      console.log("fxm",fxm);
      if(Xl==Xr){
        break;
      }
      if(fxm*fxr>0){
        Xr=Xm;
      }
      else if(fxm*fxr<0){
        Xl=Xm;
      }
      temp=Xm;
      Xm=(Xl+ Xr)/2;
      console.log("xr",Xr);
      console.log("xl",Xl);
      this.array.push({Xl,Xr});
      console.log("|Xm-temp/Xm|",Math.abs(Xm-temp/Xm));

    }
    while(Math.abs(Xm-temp/Xm)>0.000001);
    parser.clear();
  }
}
