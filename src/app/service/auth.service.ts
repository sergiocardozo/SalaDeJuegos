import { ReadKeyExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  isAuth() {
    return this.auth.authState.pipe(map(auth => auth));
  }

  async register(email: string, password: string) {

    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.auth.currentUser.then((user) => {
          user.updateProfile({ displayName: email });
        })
      });
  }

  async logout() {
    await this.auth.signOut();
  }
  
  async login(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {

      console.log('error login', error);
      return null
    }

  }
}
