import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {DividerModule} from 'primeng/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { BodyComponent } from './components/layout/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
