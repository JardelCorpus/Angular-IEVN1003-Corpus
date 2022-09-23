import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagenwidth:number=100;
  imagenMarge:number=2;
  muestraImg:boolean=false;

  constructor() { }
  muestraImagen():void{
    this.muestraImg=!this.muestraImg;
  }
  products:IProducto[]=[
    {
      "product1":1,
      "productName":'Sentra',
      "descripcion":'auto familiar 4 puertas',
      "listFilter":'',
      "createDate":"Mayo 21, 2011",
      "price":130000,
      "rating":3.6,
      "imagenUrl":"https://www.elcarrocolombiano.com/wp-content/uploads/2020/06/20200625-NISSAN-SENTRA-2020-LANZAMIENTO-EN-MEXICO-Y-AMERICA-LATINA-01.jpg"
    },
    {
      "product1":2,
      "productName":'Versa',
      "descripcion":'auto familiar 4 puertas',
      "listFilter":'',
      "createDate":"Mayo 21, 2013",
      "price":110000,
      "rating":3.6,
      "imagenUrl":"https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/versa/my22/vap/nissan-2022-versa_exclusive_cvt-d.jpeg.ximg.l_12_m.smart.jpeg"
    }
    
  ]

  ngOnInit(): void {
  }

}
