import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-felicitacion',
  templateUrl: './felicitacion.component.html',
  styleUrls: ['./felicitacion.component.css']
})
export class FelicitacionComponent {

  constructor(
    private router:Router,
  ){

  }

  irAJavilin(idFel:any){
    console.log("Boton felicitacion pulsado");
    this.router.navigate(['texto-felicitacion/'+idFel])

  }

  volver(){
    this.router.navigate(['home'])
  }

}
