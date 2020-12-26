import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Indice';
  queEs = false;
  referencia = true;

  onQueEs(){
    this.queEs = true;
    this.referencia = false;

  }

  onReferencia(){
    this.referencia = true;
    this.queEs = false;
  }
}
