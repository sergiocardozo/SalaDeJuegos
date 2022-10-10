import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Encuestas } from '../models/encuesta.interface';
import { Resultados } from '../models/resultado.interface';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private itemCollection: AngularFirestoreCollection<Encuestas>

  constructor(private afs: AngularFirestore) {
    this.itemCollection = afs.collection<Encuestas>('encuestas');
  }
  getCollection() {
    this.itemCollection = this.afs.collection<Encuestas>('encuestas');
  
    return this.itemCollection.valueChanges();
    
  }
  addEncuesta(datos: any) {
    this.itemCollection = this.afs.collection('encuestas');
    return this.itemCollection.add(Object.assign({}, datos));
  }
}
