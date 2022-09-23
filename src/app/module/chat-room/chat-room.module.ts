import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';

import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { ChatRoomComponent } from './chat-room.component';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp } from '@firebase/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    ChatRoomComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ChatRoomRoutingModule,
    AngularFirestoreModule,
    DividerModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())

  ]
})
export class ChatRoomModule { }
