import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaResultadoComponent } from './components/encuesta-resultado/encuesta-resultado.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chat', loadChildren: () => import('./module/chat-room/chat-room.module').then(m => m.ChatRoomModule) },
  { path: 'games', loadChildren: () => import('./module/games/games.module').then(m => m.GamesModule) },
  { path: 'listaEncuesta', component: EncuestaResultadoComponent, canActivate: [AdminGuard] },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }