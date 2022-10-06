import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Resultados } from '../models/resultado.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  private itemsCollection: AngularFirestoreCollection<Resultados>

  public resultados: Resultados[] = [];
  public user: any = {};
  constructor(public firestore: AngularFirestore, private auth: AuthService) { 
    auth.isAuth().subscribe( user => {
      if(!user) { return; }

      this.user.email = user.displayName;
      this.user.uid = user.uid;
    })
    this.itemsCollection = firestore.collection<Resultados>('resultados')
  }

  getCollection() {
    this.itemsCollection = this.firestore.collection<Resultados>('resultados', ref => ref.orderBy('date', 'desc'));
  
    return this.itemsCollection.valueChanges();
    
  }

  addScore(game: string, score: number) {
    let now = new Date();
    let fecha = now.getDate() + "-" + now.getMonth() + "-" + now.getFullYear(); 
    let resultado: Resultados = {
      date: fecha,
      email: this.user.email,
      game: game,
      score: score
    }

    return this.itemsCollection.add( resultado )
  }
}
