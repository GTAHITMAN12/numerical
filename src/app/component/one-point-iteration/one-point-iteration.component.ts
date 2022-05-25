import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as math from 'mathjs';

@Component({
  selector: 'app-one-point-iteration',
  templateUrl: './one-point-iteration.component.html',
  styleUrls: ['./one-point-iteration.component.css']
})
export class OnePointIterationComponent implements OnInit {
  form:FormGroup
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group({
      fun:[''],
      x1:[''],
      iter:[''],
    })
  }

  ngOnInit(): void {
  }
  dofor(){
    let i : number=this.form.value.x1;;
    let temp : number;
    let xi : number;
    let array:number[]=[];
    const parser = math.parser();
    do{
      parser.set('x',i);
      xi=parser.evaluate(math.simplify(this.form.value.fun).toString())
      array.push(xi);
      temp=xi
      i++
    }
    while(Math.abs(xi-temp/temp)<0.000001)
  }
}
