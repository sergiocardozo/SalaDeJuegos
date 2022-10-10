import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PreguntadosService } from 'src/app/service/preguntados.service';
import { ScoresService } from 'src/app/service/scores.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  mostrarFin: boolean = false;

  listHeroes: Array<any> = [];
  beginGame = false;
  imgHeroe: string;
  nameHeroes: string[] = []
  heroeSelected: any;
  correctHeroe: string = "";
  score = 0;
  intentos = 3;
  nameHeroes2: any;


  constructor(private pregServ: PreguntadosService, private scoreService: ScoresService, private route: Router) { }

  ngOnInit(): void {

    this.getCharacters()
  }

  getCharacters() {
    let listAct: Array<any> = [];
    const path = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    this.pregServ.getAllHeroes().subscribe((res: any) => {

      listAct = res.data.results;
      //skipeo los personajes de marvel que no tienen imagen 
      const newlist = listAct.filter(item => {
        if (item.thumbnail.path !== path) {
          return item;
        }
      })
      this.listHeroes = newlist;
      //selecciono un personaje al azar
      this.heroeSelected = this.listHeroes[Math.floor(Math.random() * this.listHeroes.length)];

      this.imgHeroe = this.heroeSelected.thumbnail.path + '.jpg';
      this.correctHeroe = this.heroeSelected.name;

      
      this.nombreHeroes();
     
    })
  };

  nombreHeroes() {
    for (let i = 0; i < 4; i++) {
      if (this.heroeSelected != this.correctHeroe && this.nameHeroes.length < 4 && this.correctHeroe != this.heroeSelected) {
        this.nameHeroes.push(this.listHeroes[i].name);
        this.nameHeroes.push(this.correctHeroe);
        this.nameHeroes[Math.random() * this.nameHeroes.length];
      }
    }

  }
  start() {
    this.score = 0;
    this.intentos = 3;
    this.beginGame = true;
    this.mostrarFin = false;
  }

  answer(heroe: string) {
    if (heroe === this.correctHeroe) {
      for (let i = this.nameHeroes.length; i > 0; i--) {
        this.nameHeroes.pop();
      }
      this.getCharacters();
      this.score += 5;
    } else {
      this.intentos--;
      this.getCharacters();
      this.nameHeroes = [];
      if (this.intentos === 0) {
        this.mostrarFin = true;
        this.scoreService.addScore('preguntados', this.score);

      }
    }
  }

  realizarEncuesta() {
    this.route.navigate(['/games/encuestas']);
  }
}


