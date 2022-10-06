import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { EncuestaService } from 'src/app/service/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  checked: boolean;
  email: string;
  formulario: FormGroup;
  completarForm = true;
  mensaje: string = '';
  constructor(private fb: FormBuilder, private encuestaSrv: EncuestaService, private authSrv: AuthService, private router: Router) {
    this.formulario = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10), Validators.minLength(10)]],
      playAgain: ['', Validators.required],
      sugerencias: ['', [Validators.required, Validators.minLength(10)]],
      terminos: ['', Validators.required]

    });
    this.authSrv.isAuth().subscribe((data) => {
      this.email = data.email
    })
    this.formulario.controls['terminos'].value
  }

  ngOnInit(): void {
  }

  aceptar() {
    
    const form = this.formulario.value;
    this.completarForm = false;
    let datos = {
      nombre: form.nombre,
      apellido: form.apellido,
      edad: form.edad,
      tel: form.tel,
      playAgain: form.playAgain,
      sugerencias: form.sugerencias,
      email: this.email
    }
    this.encuestaSrv.addEncuesta(datos).then((res) => {
      this.mensaje = 'Gracias por participar de la encuesta!';
      this.router.navigate(['']);
    });
  }

}


