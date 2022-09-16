import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.models';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  usuario: UserModel = new UserModel();
  errorMessage: string;
  error: boolean = false;
  message: string = '';

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if (form.invalid) { return; }

    const { email, password } = this.usuario;

    if (form.value['password'] !== form.value['confirmPwd']) {

      this.auth.register(email, password)
        .then((resp) => {
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000)
        }).catch((err) => {
          console.log(err);
          this.error = true;
          this.message = "El usuario ya esta registrado";
          setTimeout(() => {
            this.errorMessage = '';
            this.error = false;
          }, 1000);
        });

    } else {
      this.error = true;
          this.message = "Las contraseñas no coinciden";
          setTimeout(() => {
            this.errorMessage = '';
            this.error = false;
          }, 3000);
    }
  }
}

