import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';;
import { SnakeComponent } from './snake/snake.component';
import { ListaResultadosComponent } from './lista-resultados/lista-resultados.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    SnakeComponent,
    ListaResultadosComponent,
    EncuestaComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ButtonModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    RadioButtonModule
  ]
})
export class GamesModule { }
