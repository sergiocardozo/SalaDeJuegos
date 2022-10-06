import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ListaResultadosComponent } from './lista-resultados/lista-resultados.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { SnakeComponent } from './snake/snake.component';

const routes: Routes = [
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'mayormenor', component: MayorMenorComponent },
  { path: 'preguntados', component: PreguntadosComponent },
  { path: 'snake', component: SnakeComponent },
  { path: 'resultados', component: ListaResultadosComponent },
  { path: 'encuestas', component: EncuestaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
