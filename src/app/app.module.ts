import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { BodyComponent } from './components/layout/body/body.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AlertErrorComponent } from './components/layout/alert-error/alert-error.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { EncuestaResultadoComponent } from './components/encuesta-resultado/encuesta-resultado.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    SignupComponent,
    AlertErrorComponent,
    EncuestaResultadoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    ButtonModule,
    SplitButtonModule,
    ToastModule,
    DividerModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
