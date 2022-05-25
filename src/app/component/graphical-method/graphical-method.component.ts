import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ts from "typescript";

@Component({
  selector: 'app-graphical-method',
  templateUrl: './graphical-method.component.html',
  styleUrls: ['./graphical-method.component.css']
})
export class GraphicalMethodComponent implements OnInit {
  form:FormGroup;
  options: any;
  e: number ;
  constructor(private fb:FormBuilder) {
    this.form=this.fb.group({
      fx:''
    })
    this.e=10;
  }
  ngOnInit(): void {

  }

  calfx(fx:string):number{
    return eval(fx+';') ;
  }

}
