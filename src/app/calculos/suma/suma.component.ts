import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-suma',
    templateUrl: './suma.component.html',
    styleUrls: ['./suma.component.css']
})
export class SumaComponent{

    constructor() { }

    total:number=0;
    numero1;
    numero2;
    numero3;

    Sumar(){
        switch(this.numero3){
            case 'suma':
                this.total=parseInt(this.numero1)+parseInt(this.numero2);
                break;
            case 'resta':
                this.total=parseInt(this.numero1)-parseInt(this.numero2);
                break;
            case 'multi':
                this.total=parseInt(this.numero1)*parseInt(this.numero2);
                break;
            case 'div':
                this.total=parseInt(this.numero1)/parseInt(this.numero2);
                break;
        }
    }
}