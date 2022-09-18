import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  message: string = '';
  usuario: UserModel = new UserModel();
  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.invalid) { return; }

    this.auth.login(this.usuario.email, this.usuario.password)
      .then(resp => {
        console.log(resp);
        setTimeout(() => {
          if (this.usuario.password) {
            this.router.navigate(['/home']);

          }
        }, 2000);
      }).catch((err) => {
        console.log(err);
        this.error = true;
        this.message = "Algo salio mal";
        setTimeout(() => {
          this.message = '';
          this.error = false;
        }, 1000);
      })
  }

  testLogin(form: NgForm) {
    form.setValue({ email: 'cuentatest@gmail.com', password: 'test1234' })
  }
}

