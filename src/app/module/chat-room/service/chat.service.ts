import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Mensaje } from 'src/app/models/mensaje.interface';
import { AuthService } from 'src/app/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>

  public chats: Mensaje[] = [];
  public user: any = {};

  constructor(public firestore: AngularFirestore, private auth: AuthService) {
    auth.isAuth().subscribe( user => {
      if(!user) { return; }
      this.user.email = user.displayName;
      this.user.uid = user.uid;
    })
   }

  getCollection(){
    this.itemsCollection = this.firestore.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(7));

    return this.itemsCollection.valueChanges()
      .pipe(map((mensajes: Mensaje[]) => {
        this.chats = [];
        for( let mensaje of mensajes ) {
          this.chats.unshift( mensaje );
        }
        return this.chats;
      }));
  }

  /* getCollectionWithId(coleccion:any, nombreIdField:string){
    return this.firestore.collection(coleccion).valueChanges({ idField: nombreIdField });
  } */

  addToChat(text: string)
  {
    let mensaje: Mensaje = {
      email: this.user.email,
      mensaje: text,
      fecha: new Date().getTime(),
      uid: this.user.uid
    }

    return this.itemsCollection.add( mensaje );
  }
}
