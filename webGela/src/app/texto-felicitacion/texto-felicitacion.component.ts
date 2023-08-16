import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-texto-felicitacion',
  templateUrl: './texto-felicitacion.component.html',
  styleUrls: ['./texto-felicitacion.component.css']
})
export class TextoFelicitacionComponent implements OnInit {

  idFel : string;

  ngOnInit() {
    this.route.params.subscribe((params:any)=>{
      console.log(params)
      this.idFel=params.id
      console.log("ID-->",this.idFel)
    })
  }

  constructor(
    private route: ActivatedRoute,
    private router:Router) {
    this.idFel="0";
  }

  volver(){
    this.router.navigate(['felicitacion'])
  }





}
