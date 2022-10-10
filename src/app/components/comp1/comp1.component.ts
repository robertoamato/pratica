import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

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
  public desabilitar:boolean=false;
  public imagem:string="http://4.bp.blogspot.com/-3YwFT7wiDnE/VT5NLGC20qI/AAAAAAABC8Y/tQcMBoQkbEk/s320/adffb142a07755f9fc4e1400e3491ae32.jpg";
  public teste1:number=2;
  public teste2:string="digite algo";
  public position:any={x:0, y:0};

  public nomeum:string="roberto";
  public nomedois:string="amato";
  public idadedois:number=39;
  public imagemdois:string="http://4.bp.blogspot.com/-3YwFT7wiDnE/VT5NLGC20qI/AAAAAAABC8Y/tQcMBoQkbEk/s320/adffb142a07755f9fc4e1400e3491ae32.jpg";
  
  public desabilitarum:boolean=true;
  public position1:any={x:0, y:0};

  
  
  
  constructor() { }

  ngOnInit(): void {
  }
 
 public ALERTA (){
  alert("deu bom");



 }
 public alerta2(){
  alert("deu ruim");

 }
 public mouseteste(valor:MouseEvent){
  this.position.x=valor.offsetX;
  this.position.y=valor.offsetY;

}



public alerta1 (){
  alert("deu bom");

}

public alerta3(){
  alert("deu ruim");


}

public mouseteste1(valor:MouseEvent){
  this.position1.x=valor.offsetX;
  this.position1.y=valor.offsetY;





}
  
 }

