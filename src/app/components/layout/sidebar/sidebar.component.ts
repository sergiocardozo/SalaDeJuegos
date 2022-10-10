import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  item: MenuItem[];
  isAdmin: boolean;
  isLogin: boolean;
  userEmail: string;
  display = true;

  constructor(private primengConfig: PrimeNGConfig,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.auth.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.userEmail = auth.email;
        if(auth.email === 'scardozo.sc@gmail.com'){
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      } else {
        this.isLogin = false;
      }
    })

    /* this.item = [
      { label: 'Ahorcado', icon: 'pi pi-cog', routerLink: ['/games/ahorcado'] },
      { label: 'Menor O Mayor', icon: 'pi pi-cog', routerLink: ['/games/mayormenor'] },
      { label: 'Preguntados', icon: 'pi pi-cog', routerLink: ['/games/preguntados'] },
      { label: 'Snake', icon: 'pi pi-cog', routerLink: ['/games/snake'] }


    ] */

  }

  onClick() {
    this.auth.logout()
      .then(resp => {
        this.router.navigateByUrl('/login');
      }).catch(err => {
        console.log(err);
      })
  }
}
