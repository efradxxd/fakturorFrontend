import { Component, OnInit } from '@angular/core';
import { Provedor } from '../provedor.model';
import { LoadProvedoresService } from '../load-provedores.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.css']
})
export class ProvedoresComponent implements OnInit {
  public isMobile = false;
  public colSize = 4 ;
  filtrarPor = 'TODOS';
  descFavorable = this.loadProvedoresService.descFavorable;
  descPresunto = this.loadProvedoresService.descPresunto;
  descDesvirtuado = this.loadProvedoresService.descDesvirtuado;
  descDefinitivo = this.loadProvedoresService.descDefinitivo;
  provedores: Provedor[];
  constructor(
    private loadProvedoresService: LoadProvedoresService,
    breakpointObserver: BreakpointObserver
  ) {
      breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
        if (this.isMobile) {
          this.colSize = 1;
        } else {
          this.colSize = 4;
        }
      }
  );
}

  ngOnInit() {
    this.provedores = this.loadProvedoresService.getFiltroProvedores(0);
    // this.descripcion = this.loadProvedoresService.descFavorable;
  }

  filtroProvedores(tipo: number) {
    this.provedores = [];
    // console.log('', this.loadProvedoresService.getFiltroProvedores(tipo));
    this.provedores = (this.loadProvedoresService.getFiltroProvedores(tipo));
    if (tipo === 0) {
      this.filtrarPor = 'TODOS';
    } else if (tipo === 1) {
      this.filtrarPor = 'FAVORABLES';
    } else if (tipo === 2) {
      this.filtrarPor = 'PRESUNTOS';
    } else if (tipo === 3) {
      this.filtrarPor = 'DESVIRTUADOS';
    } else if (tipo === 4) {
      this.filtrarPor = 'DEFINITIVOS';
    }
  }

}
