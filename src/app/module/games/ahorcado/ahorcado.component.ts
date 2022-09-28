import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {


  arrayWords: string[] = ["vamonos", "nave", "cielo", "habra", "orden", "segura", "querida", "niña", "increible", "ademas", "deben", "libro", "calle", "cafe", "piensas", "hacemos", "especial", "queremos", "clark", "irme", "perfecto", "buscar", "odio", "piensa", "oficina", "hablas", "libre", "agente", "york", "llamar"];
  words = '';
  palabraOculta = '';
  mistakesRemaining = 0;
  yourWin = false;
  lose = false;
  menu = true;
  key = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  numPalabra: number = 0;
  score: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  start() {
    this.menu = false;
    this.yourWin = false;
    this.lose = false;
    this.mistakesRemaining = 0;
    this.choseWords();
    this.score = 0;
  }
  continue() {
    this.yourWin = false;
    this.lose = false;
    this.mistakesRemaining = 0;
    this.choseWords();
  }
  choseWords() {
    this.numPalabra = this.getRandomInt(0, this.arrayWords.length - 1);
    this.palabraOculta = '_ '.repeat(this.arrayWords[this.numPalabra].length);
    this.words = this.arrayWords[this.numPalabra].toUpperCase();
    this.menu = false;
    this.yourWin = false;
    this.lose = false;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  verify(letra: string) {

    this.existeLetra(letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i] === letra) {
        palabraOcultaArr[i] = letra;
      }

      this.palabraOculta = palabraOcultaArr.join(' ');
      this.verificaGane();
    }
  }

  verificaGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if (palabraEvaluar == this.words) {
      this.yourWin = true;
      this.score++;
      this.words = "";
    }
    if (this.mistakesRemaining >= 6) {
      this.lose = true;
    }
  }

  backToMenu() {
    this.menu = true;
    this.lose = false;
    this.score = 0;
  }

  existeLetra(letra: string) {
    if (this.words.indexOf(letra) >= 0) {
    } else {
      this.mistakesRemaining++;
    }
  }


}
