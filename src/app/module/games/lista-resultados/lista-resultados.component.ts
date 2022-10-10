import { Component, OnInit } from '@angular/core';
import { ScoresService } from 'src/app/service/scores.service';

@Component({
  selector: 'app-lista-resultados',
  templateUrl: './lista-resultados.component.html',
  styleUrls: ['./lista-resultados.component.css']
})
export class ListaResultadosComponent implements OnInit {

  resultados: Array<any> = [];
  element: any;

  constructor(public scoreService: ScoresService) { 
    this.scoreService.getCollection()
    .subscribe((data) => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
        
      }, 20);
      this.resultados = data;
      
    })
  }

  ngOnInit(): void {
    this.element = document.getElementById('containerTable');
    
  }

}
