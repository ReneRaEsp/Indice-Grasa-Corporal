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
  atleta=false;
  bueno=false;
  normal=false;
  elevado=false;
  muyElevado=false;  
  fueraRango=false;


  constructor() { }

  ngOnInit(): void {
  }

  onCalcularM(): void {
  	this.iMC = this.peso/((this.altura)*(this.altura));
    this.iGC = (1.2*this.iMC+0.23*this.edad-5.4).toFixed();
    var iGC = (1.2*this.iMC+0.23*this.edad-5.4);

    this.calculado = true;
    /*A continuacion se verifica a que categoria corresponde cada IGC de acuerdo a la tabla de IGC en mujeres*/
    //Se activa con un true el elemento correspondiente a su vez que se desactivan los que no corresponden con un false

    if(this.edad >= 20 && this.edad <=29 && iGC < 16){
      this.atleta = true; this.bueno = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false; 
    } if (this.edad >= 30 && this.edad <=39 && iGC < 17){
      this.atleta = true; this.bueno = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false; 
    } if(this.edad >= 40 && this.edad <=49 && iGC < 18){
      this.atleta = true; this.bueno = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false; 
    } if(this.edad >= 50 && this.edad <=59 && iGC < 19){
      this.atleta = true; this.bueno = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false; 
    } if(this.edad >= 20 && this.edad <=29 && iGC >= 16 && iGC <= 19){
      this.bueno = true; this.atleta = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 30 && this.edad <=39 && iGC >= 17 && iGC <= 20){
      this.bueno = true; this.atleta = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 40 && this.edad <=49 && iGC >= 18 && iGC <= 21){
      this.bueno = true; this.atleta = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 50 && this.edad <=59 && iGC >= 19 && iGC <= 22){
      this.bueno = true; this.atleta = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 20 && this.edad <=29 && iGC >= 20 && iGC <= 28){
      this.normal = true; this.atleta = false; this.bueno=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 30 && this.edad <=39 && iGC >= 21 && iGC <= 29){
      this.normal = true; this.atleta = false; this.bueno=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 40 && this.edad <=49 && iGC >= 22 && iGC <= 30){
      this.normal = true; this.atleta = false; this.bueno=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 50 && this.edad <=59 && iGC >= 23 && iGC <= 34){
      this.normal = true; this.atleta = false; this.bueno=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 20 && this.edad <=29 && iGC >= 29 && iGC <= 31){
      this.elevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 30 && this.edad <=39 && iGC >= 30 && iGC <= 32){
      this.elevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 40 && this.edad <=49 && iGC >= 31 && iGC <= 33){
      this.elevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 50 && this.edad <=59 && iGC >= 32 && iGC <= 34){
      this.elevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 20 && this.edad <=29 && iGC > 31){
      this.muyElevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.elevado=false; this.fueraRango=false;
    } if(this.edad >= 30 && this.edad <=39 && iGC > 32){
      this.muyElevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.elevado=false; this.fueraRango=false;
    } if(this.edad >= 40 && this.edad <=49 && iGC > 33){
      this.muyElevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.elevado=false; this.fueraRango=false;
    } if(this.edad >= 50 && this.edad <=59 && iGC > 34){
      this.muyElevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.elevado=false; this.fueraRango=false;
    } 
 //Si no corresponde a ninguno se mestra el elemento html p fueraRango

  }

  onCalcularH(): void {
    this.iMC = this.peso/((this.altura)*(this.altura));
    var iGC = (1.2*this.iMC+0.23*this.edad-10.8-5.4);
    this.iGC = (1.2*this.iMC+0.23*this.edad-10.8-5.4).toFixed();


    this.calculado = true;
/*A continuacion se verifica a que categoria corresponde cada IGC segun la tabla de IGC para hombres*/
//Se activa con un true el elemento correspondiente a su vez que se desactivan los que no corresponden con un false

    if(this.edad >= 20 && this.edad <=29 && iGC < 11){
      this.atleta = true; this.bueno = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false; 
    } if (this.edad >= 30 && this.edad <=39 && iGC < 12){
      this.atleta = true; this.bueno = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false; 
    } if(this.edad >= 40 && this.edad <=49 && iGC < 14){
      this.atleta = true; this.bueno = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false; 
    } if(this.edad >= 50 && this.edad <=59 && iGC < 15){
      this.atleta = true; this.bueno = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false; 
    } if(this.edad >= 20 && this.edad <=29 && iGC >= 11 && iGC <= 13){
      this.bueno = true; this.atleta = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 30 && this.edad <=39 && iGC >= 12 && iGC <= 14){
      this.bueno = true; this.atleta = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 40 && this.edad <=49 && iGC >= 14 && iGC <= 16){
      this.bueno = true; this.atleta = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 50 && this.edad <=59 && iGC >= 15 && iGC <= 17){
      this.bueno = true; this.atleta = false; this.normal=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 20 && this.edad <=29 && iGC >= 14 && iGC <= 20){
      this.normal = true; this.atleta = false; this.bueno=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 30 && this.edad <=39 && iGC >= 15 && iGC <= 21){
      this.normal = true; this.atleta = false; this.bueno=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 40 && this.edad <=49 && iGC >= 17 && iGC <= 23){
      this.normal = true; this.atleta = false; this.bueno=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 50 && this.edad <=59 && iGC >= 18 && iGC <= 24){
      this.normal = true; this.atleta = false; this.bueno=false; this.elevado=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 20 && this.edad <=29 && iGC >= 21 && iGC <= 23){
      this.elevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 30 && this.edad <=39 && iGC >= 22 && iGC <= 24){
      this.elevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 40 && this.edad <=49 && iGC >= 24 && iGC <= 26){
      this.elevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 50 && this.edad <=59 && iGC >= 25 && iGC <= 27){
      this.elevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.muyElevado=false; this.fueraRango=false;
    } if(this.edad >= 20 && this.edad <=29 && iGC > 23){
      this.muyElevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.elevado=false; this.fueraRango=false;
    } if(this.edad >= 30 && this.edad <=39 && iGC > 24){
      this.muyElevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.elevado=false; this.fueraRango=false;
    } if(this.edad >= 40 && this.edad <=49 && iGC > 26){
      this.muyElevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.elevado=false; this.fueraRango=false;
    } if(this.edad >= 50 && this.edad <=59 && iGC > 27){
      this.muyElevado = true; this.atleta = false; this.bueno=false; this.normal=false; this.elevado=false; this.fueraRango=false;
    } 

  }


}
