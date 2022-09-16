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

  usuario: UserModel = new UserModel();
  constructor(private auth: AuthService, private router: Router) { }


  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.invalid) { return; }

    this.auth.login(this.usuario.email, this.usuario.password)
    .then(resp => {
      console.log(resp);
      this.router.navigate(['/home']);
    }).catch((err) =>{
      console.log(err);
    })
  }

  testLogin(form: NgForm) {
    form.setValue({ email: 'cuentatest@gmail.com', password: 'test1234' })
  }
}

