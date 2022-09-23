import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  public titulo:string= "Interpolacao";
  public nome:string= "Roberto";
  public idade:number=39;
  public maisum:number=1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
