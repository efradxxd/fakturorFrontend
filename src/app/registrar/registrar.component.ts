import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
//import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  pass1 = '';
  pass2 = '';
  estadoSelecionado = '';
  estados =
  [
    { value: 'AGS', viewValue: 'AGUASCALIENTES' },
    { value: 'BC',  viewValue: 'BAJA CALIFORNIA' },
    { value: 'BCS', viewValue: 'BAJA CALIFORNIA SUR' },
    { value: 'CHI', viewValue: 'CHIHUAHUA' },
    { value: 'CHS', viewValue: 'CHIAPAS' },
    { value: 'CMP', viewValue: 'CAMPECHE' },
    { value: 'CMX', viewValue: 'CIUDAD DE MEXICO' },
    { value: 'COA', viewValue: 'COAHUILA' },
    { value: 'COL', viewValue: 'COLIMA' },
    { value: 'DGO', viewValue: 'DURANGO' },
    { value: 'GRO', viewValue: 'GUERRERO' },
    { value: 'GTO', viewValue: 'GUANAJUATO' },
    { value: 'HGO', viewValue: 'HIDALGO' },
    { value: 'JAL', viewValue: 'JALISCO' },
    { value: 'MCH', viewValue: 'MICHOACAN' },
    { value: 'MEX', viewValue: 'ESTADO DE MEXICO' },
    { value: 'MOR', viewValue: 'MORELOS' },
    { value: 'NAY', viewValue: 'NAYARIT' },
    { value: 'NL',  viewValue: 'NUEVO LEON' },
    { value: 'OAX', viewValue: 'OAXACA' },
    { value: 'PUE', viewValue: 'PUEBLA' },
    { value: 'QR',  viewValue: 'QUINTANA ROO' },
    { value: 'QRO', viewValue: 'QUERETARO' },
    { value: 'SIN', viewValue: 'SINALOA' },
    { value: 'SLP', viewValue: 'SAN LUIS POTOSI' },
    { value: 'SON', viewValue: 'SONORA' },
    { value: 'TAB', viewValue: 'TABASCO' },
    { value: 'TLX', viewValue: 'TLAXCALA' },
    { value: 'TMS', viewValue: 'TAMAULIPAS' },
    { value: 'VER', viewValue: 'VERACRUZ' },
    { value: 'YUC', viewValue: 'YUCATAN' },
    { value: 'ZAC', viewValue: 'ZACATECAS' } 
  ];

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessageEmail() {
    return this.email.hasError('necesario') ? 'Se necesita este campo' :
        this.email.hasError('email') ? 'Email no valido' :
            '';
  }

  pass22 = new FormControl('', [Validators.required]);


  passMatch() {
     let response = this.pass1 === this.pass2 ?  false : true;
     console.log('pass1:' + this.pass1);
     console.log('pass2:' + this.pass2);
     return response;
  }

  constructor(
    private _builder: FormBuilder
  ) {}

  ngOnInit() {
  }

}
