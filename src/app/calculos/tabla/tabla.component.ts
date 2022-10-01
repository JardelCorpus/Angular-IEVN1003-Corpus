import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent{

  constructor() { 
    this.totalTabla=[
    ];

  }

  totalTabla:string[];
  tabla;
  total:number=0;
  

  /*ngOnInit(): void {
  }
  */


  Multiplicar(){
    for(let i=1; i<=10; ++i){
      this.totalTabla[i]= (`${this.tabla} x ${i} = ${this.tabla*i}`  +  "\n");
      /*this.totalTabla[i]=parseInt(this.tabla)*parseInt(i);
      */
    }
  }

}
