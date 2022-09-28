import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { ButtonModule } from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import { SnakeComponent } from './snake/snake.component';


@NgModule({
  declarations: [
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    SnakeComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ButtonModule,
    FieldsetModule
  ]
})
export class GamesModule { }
