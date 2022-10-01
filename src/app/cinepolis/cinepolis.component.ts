import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  constructor() { }

  nombre:string;
  compradores:number;
  boletos:number;
  tarjeta:string;
  total:number=0;
  prueba:string;
 
  /*ngOnInit(): void {
  }
*/
Calcular(){
  if(this.boletos<=this.compradores*7){
    if(this.boletos<=2){
      this.total=(this.boletos*12)-((this.boletos*12)*0.10)
      if(this.tarjeta=="si"){
        this.prueba=(` ${this.nombre} Tienes un Descuento Adicional del 10%`+ "\n"+ `Total a pagar: $ ${this.total}`);
      }
      else{
        this.prueba=(` ${this.nombre} No hay descuento`+ "\n"+ `Total a pagar: $ ${this.boletos*12}`);
      }
    }
    if(this.boletos>5){
      if(this.tarjeta=="si"){
        this.total=(this.boletos*12)-((this.boletos*12)*0.15)
        this.prueba=(` ${this.nombre} Tienes un Descuento Adicional al de 15% del 10%`+ "\n"+ `Total a pagar: $ ${(this.total)-((this.total)*0.10)}`);
      }
      else{
        this.prueba=(` ${this.nombre} Tienes 15% de descuento Total a pagar: $ ${(this.boletos*12)-((this.boletos*12)*0.15)}`  +  "\n");
      }
    }
    if(this.boletos>=3 && this.boletos<=5){
      if(this.tarjeta=="si"){
        this.total=(this.boletos*12)-((this.boletos*12)*0.10)
        this.prueba=(` ${this.nombre} Tienes un Descuento Adicional al de 10% del 10%`+ "\n"+ `Total a pagar: $ ${(this.total)-((this.total)*0.10)}`);
      }
      else{
        this.prueba=(` ${this.nombre} Tienes 10% de descuento Total a pagar: $ ${(this.boletos*12)-((this.boletos*12)*0.10)}`  +  "\n");
      }
    }
  }
  else{
    this.prueba="Rebasó la cantidad de boletos permitida";
  }
  }
  
}
