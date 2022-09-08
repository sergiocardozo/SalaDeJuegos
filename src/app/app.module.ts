import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {SkeletonModule} from 'primeng/skeleton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { BodyComponent } from './components/layout/body/body.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    DividerModule,
    SkeletonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
