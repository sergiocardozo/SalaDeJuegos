import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLogin: boolean;
  userEmail: string;
  display = true;

  constructor(private primengConfig: PrimeNGConfig,
    private auth: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.auth.isAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userEmail = auth.email;
        console.log(auth.email);
      } else {
        this.isLogin = false;
      }
    })
  }

  onClick() {
    this.auth.logout()
    .then(resp => {
      this.router.navigateByUrl('/login');
    }).catch( err => {
      console.log(err);
    })
  }
}
