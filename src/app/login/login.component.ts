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
    estilo: '#005c8f',
    color: 'grey'
  };
  user = {
    email : '',
    password : ''
  };
  constructor(private loadProvedoresService: LoadProvedoresService) { }

  ngOnInit() {
  }

  habilitarBoton() {
    if (this.user.email !== '' && this.user.password !== '') {
      return true;
    } else {
      return false;
    }
  }

  validarDatos() {
    let validEmail = this.loadProvedoresService.validarEmail(this.user.email);
    if (validEmail) {
      this.validacion.color = 'grey';
      this.validacion.texto = 'INGRESA TUS DATOS';
      console.log(this.user.email);
      console.log(this.user.password);
    } else {
      this.validacion.texto = 'EMAIL INVÁLIDO';
      this.validacion.color = 'red';
    }
  }

}
