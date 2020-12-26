import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.sass']
})
export class CalcularComponent implements OnInit {
	calculado = false ;
  peso:number;
  altura:number;
  edad:number;
  iMC:number;
  iGC:string;


  constructor() { }

  ngOnInit(): void {
  }

  onCalcularM(): void {
  	this.iMC = this.peso/((this.altura)*(this.altura));
    this.iGC = (1.2*this.iMC+0.23*this.edad-5.4).toFixed();

    this.calculado = true;
 

  }

  onCalcularH(): void {
    this.iMC = this.peso/((this.altura)*(this.altura));
    this.iGC = (1.2*this.iMC+0.23*this.edad-10.8-5.4).toFixed();


    this.calculado = true;
 

  }


}
