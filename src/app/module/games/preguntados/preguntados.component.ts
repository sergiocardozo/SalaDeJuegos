import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PreguntadosService } from 'src/app/service/preguntados.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {


  listHeroes: Array<any> = [];
  beginGame = false;
  imgHeroe: string;
  nameHeroes: string[] = []

  correctHeroe: string = "";
  score = 0;
  intentos = 3;


  constructor(private pregServ: PreguntadosService) { }

  ngOnInit(): void {

    this.getCharacters()
  }

  getCharacters() {
    let listAct: Array<any> = [];
    const path = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    this.pregServ.getAllHeroes().subscribe((res: any) => {

      listAct = res.data.results;
      const newlist = listAct.filter(item => {
        if (item.thumbnail.path !== path) {
          return item;
        }
      })
      this.listHeroes = newlist;

      const chosenHeroe = this.listHeroes[Math.floor(Math.random() * this.listHeroes.length)];
      this.imgHeroe = chosenHeroe.thumbnail.path + '.jpg';
      this.correctHeroe = chosenHeroe.name;

      for (let i = 0; i < 3; i++) {
        if (chosenHeroe != this.correctHeroe) {

          this.nameHeroes.push(this.listHeroes[i].name);
        }
      }
      this.nameHeroes.push(this.correctHeroe);
      console.log(this.nameHeroes);

    })


  };
  start() {
    this.score = 0;
    this.intentos = 3;
    this.beginGame = true;
  }

  answer(heroe: string) {
    if (heroe === this.correctHeroe) {
      this.nameHeroes = [];
      this.getCharacters();
      this.score += 5;
    } else {
      this.intentos--;
      this.getCharacters();
      this.nameHeroes = [];
      if (this.intentos === 0) {
        this.beginGame = false;
      }
    }
  }
}


