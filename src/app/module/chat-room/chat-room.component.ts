import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ChatService } from './service/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  user;
  message: string = "";
  element: any;
  

  constructor( public chatService: ChatService, private auth: AuthService ) {
    this.chatService.getCollection()
                    .subscribe( () => {
                      setTimeout(() => {
                        this.element.scrollTop = this.element.scrollHeight;
                      }, 20);
                    });
  }
  ngOnInit(): void {
    this.element = document.getElementById('contenedorMensajes');
    this.auth.isAuth().subscribe( user => {
      this.user = user;
    })
  }

  send_message() {
    if( this.message.length === 0 ) {
      return;
    }

    this.chatService.addToChat ( this.message )
    .then( () => this.message = "" )
    .catch( (err) => console.error("error al enviar", err));
  }
}
