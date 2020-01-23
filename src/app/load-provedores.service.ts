import { Injectable } from '@angular/core';
import { Provedor } from './provedor.model';

@Injectable({
  providedIn: 'root'
})
export class LoadProvedoresService {

  provedoresTest: Provedor [] = [
    {
      razonSocial: 'Marzhal Hackers SA de CV',
      status: 'Favorable'
    },
    {
      razonSocial: 'Nescafe soluciones wswsgggggggggg',
      status: 'Presunto'
    },
    {
      razonSocial: 'Farmacias Similares',
      status: 'Desvirtuado'
    },
    {
      razonSocial: 'Comercial Mexicana',
      status: 'Definitivo'
    },
    {
      razonSocial: 'FEMSA SA DE CV',
      status: 'Definitivo'
    },
    {
      razonSocial: 'NESTLE INC',
      status: 'Presunto'
    },
    {
      razonSocial: 'Comarket SA de CV',
      status: 'Desvirtuado'
    },
    {
      razonSocial: 'Microsoft Corp',
      status: 'Definitivo'
    },
    {
      razonSocial: 'First Majestci SA de CV',
      status: 'Definitivo'
    }
  ];

    // tslint:disable-next-line:max-line-length
    descFavorable = 'El contribuyente con este Registro Federal de Contribuyentes (RFC) NO ha sido detectado por el Servicio de Administración Tributaria (SAT) como una Empresa que Factura Operaciones Simuladas (EFOs). Es seguro aceptar una factura de ese contribuyente.';
    // tslint:disable-next-line:max-line-length
    descPresunto = 'El contribuyente con este Registro Federal de Contribuyentes (RFC) ha sido detectado como una Empresa que Factura Operaciones Simuladas (EFOs) y se encuentra en proceso de revisión por parte del Servicio de Administración Tributaria (SAT). Es importante estar pendiente de la resolución que derive de dicha revisión. Por ahora los comprobantes emitidos por ese contribuyente siguen teniendo plenos efectos.';
    // tslint:disable-next-line:max-line-length
    descDesvirtuado = 'El contribuyente con este Registro Federal de Contribuyentes (RFC) fue detectado por el Servicio de Administración Tributaria (SAT) como una Empresa que Factura Operaciones Simuladas (EFOs), sin embargo, de la revisión realizada por dicha autoridad a los documentos aportados por el contribuyente, se concluyó que sus operaciones no son simuladas por lo que quedó sin efectos la presunción. Es seguro aceptar una factura de ese contribuyente.';
    // tslint:disable-next-line:max-line-length
    descDefinitivo = 'El contribuyente con este Registro Federal de Contribuyentes (RFC) fue detectado por el Servicio de Administración Tributaria (SAT) como una Empresa que Factura Operaciones Simuladas (EFOs). La revisión efectuada por dicha autoridad fue desfavorable a dicha empresa. Todos los comprobantes fiscales emitidos por este contribuyente dejan de tener efectos fiscales. Es importante acudir ante la autoridad fiscal a demostrar la materialidad de las operaciones dentro de los 30 días siguientes a la publicación del contribuyente en la lista de EFOs';

  constructor() { }

  // getTestProvedores() {
  //   return this.provedoresTest;
  // }

  getFiltroProvedores(tipo: number) {
    if (tipo === 0 ) {
      return this.provedoresTest;
    } else if (tipo === 1) {
      return this.provedoresTest.filter(item => 'Favorable' === item.status);
    } else if (tipo === 2) {
      return this.provedoresTest.filter(item => 'Presunto' === item.status);
    } else if (tipo === 3) {
      return this.provedoresTest.filter(item => 'Desvirtuado' === item.status);
    } else if (tipo === 4) {
      return this.provedoresTest.filter(item => 'Definitivo' === item.status);
    }
  }

  getDescripcion(tipo: number) {
    if (tipo === 1) {
      return this.descFavorable;
    } else if (tipo === 2) {
      return this.descPresunto;
    } else if (tipo === 3) {
      return this.descDesvirtuado;
    } else if (tipo === 4) {
      return this.descDefinitivo;
    }
  }

}
