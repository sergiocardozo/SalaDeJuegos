import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.models';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  usuario: UserModel = new UserModel();
  error: boolean = false;
  message: string = '';

  constructor(private auth: AuthService, private router: Router, private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if (form.invalid) { return; }

    const { email, password, userName } = this.usuario;

    if (form.value['password'] !== form.value['confirmPwd']) {

      this.auth.register(email, password, userName)
        .then((resp) => {
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000)
        }).catch((err) => {
          console.log(err);
          this.error = true;
          this.message = "El usuario ya esta registrado";
          setTimeout(() => {
            this.message = '';
            this.error = false;
          }, 1000);
        });

    } else {
      this.error = true;
          this.message = "Las contraseñas no coinciden";
          setTimeout(() => {
            this.message = '';
            this.error = false;
          }, 3000);
    }
  }
}

