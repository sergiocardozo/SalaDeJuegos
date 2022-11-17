import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/service/encuesta.service';

@Component({
  selector: 'app-encuesta-resultado',
  templateUrl: './encuesta-resultado.component.html',
  styleUrls: ['./encuesta-resultado.component.css']
})
export class EncuestaResultadoComponent implements OnInit {

  resultados: Array<any> = [];
  element: any;

  constructor(public encuestaService: EncuestaService) { 
    
  }

  ngOnInit(): void {
    this.element = document.getElementById('containerTable');
    this.encuestaService.getCollection()
    .subscribe((data) => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
        
      }, 20);
      console.log(data)
      this.resultados = data;
      
    })
  }

}
