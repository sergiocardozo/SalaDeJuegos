import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoresService } from 'src/app/service/scores.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  menu = true;

  cartaPrincipal;
  cartaSecundaria;
  mensaje!: string;

  cuenta: number = 0;
  mistakesRemaining = 6;
  mostrarFin: boolean = false;

  cartas = [
    { numero: 1, pathImg: '../../../../assets/img/games/mayormenor/1.jpg' },
    { numero: 2, pathImg: '../../../../assets/img/games/mayormenor/2.jpg' },
    { numero: 3, pathImg: '../../../../assets/img/games/mayormenor/3.jpg' },
    { numero: 4, pathImg: '../../../../assets/img/games/mayormenor/4.jpg' },
    { numero: 5, pathImg: '../../../../assets/img/games/mayormenor/5.jpg' },
    { numero: 6, pathImg: '../../../../assets/img/games/mayormenor/6.jpg' },
    { numero: 7, pathImg: '../../../../assets/img/games/mayormenor/7.jpg' },
    { numero: 8, pathImg: '../../../../assets/img/games/mayormenor/8.jpg' },
    { numero: 9, pathImg: '../../../../assets/img/games/mayormenor/9.jpg' },
    { numero: 10, pathImg: '../../../../assets/img/games/mayormenor/10.jpg' },
    { numero: 11, pathImg: '../../../../assets/img/games/mayormenor/11.jpg' },
    { numero: 12, pathImg: '../../../../assets/img/games/mayormenor/12.jpg' },


  ];


  constructor(private scoreService: ScoresService, private route: Router) {
    this.cartaPrincipal = this.calcularCartaRandom();
    this.cartaSecundaria = this.calcularCartaRandom();
  }

  counter(i: number) {
    return new Array(i);
  }
  ngOnInit(): void {
  }


  calcularCartaRandom() {
    return this.cartas[Math.floor(Math.random() * this.cartas.length)];
  }

  play(res: string) {
    if (this.respuesta(res)) {
      this.cuenta += 10;
      this.cartaPrincipal = this.cartaSecundaria;
      this.cartaSecundaria = this.calcularCartaRandom();
      this.mensaje = 'BIEN!'
    } else {
      if (this.mistakesRemaining > 0) {
        this.mistakesRemaining--;
        this.mensaje = 'NO :(';

        this.cartaPrincipal = this.cartaSecundaria;
        this.cartaSecundaria = this.calcularCartaRandom();
        if (this.mistakesRemaining == 0) {
          this.mostrarFin = true;
          this.scoreService.addScore('Mayor o Menor', this.cuenta)

        }
      }
    }
  }


  respuesta(res: string): boolean {
    switch (res) {
      case 'mayor':
        if (this.cartaPrincipal.numero > this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;

      case 'igual':
        if (this.cartaPrincipal.numero == this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;
      case 'menor':
        if (this.cartaPrincipal.numero < this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;
      default:
        return false;
        break;
    }
  }

  start() {
    this.menu = false;

  }
  reload() {
    window.location.reload();
  }

  realizarEncuesta() {
    this.route.navigate(['/games/encuestas']);
  }

}
