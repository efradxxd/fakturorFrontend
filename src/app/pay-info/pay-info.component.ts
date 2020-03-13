import { Component, OnInit } from '@angular/core';
import { LoadProvedoresService } from '../load-provedores.service';
@Component({
  selector: 'app-pay-info',
  templateUrl: './pay-info.component.html',
  styleUrls: ['./pay-info.component.css']
})
export class PayInfoComponent implements OnInit {


  validacion = {
    texto: 'INGRESA TUS DATOS',
    estilo: '#005c8f',
    color: 'grey'
  };
  user = {
    email : '',
    password : ''
  };

  constructor(
    private loadProvedoresService: LoadProvedoresService
  ) { }

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
