import { Component, OnInit } from '@angular/core';
import { LoadProvedoresService } from '../load-provedores.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validacion = {
    texto: 'INGRESA TUS DATOS',
    estilo: '',
    color: 'primary'
  };
  user = {
    email : '',
    password : ''
  };
  constructor(private loadProvedoresService: LoadProvedoresService) { }

  ngOnInit() {
  }


  validarDatos() {
    let validEmail = this.loadProvedoresService.validarEmail(this.user.email);
    if (validEmail) {
      this.validacion.color = 'primary';
      this.validacion.texto = 'INGRESA TUS DATOS';
      console.log(this.user.email);
      console.log(this.user.password);
    } else {
      this.validacion.texto = 'EMAIL INVÁLIDO';
      this.validacion.color = 'accent';
    }
  }

}
