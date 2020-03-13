import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayInfoComponent } from './pay-info/pay-info.component';
import { ProvedoresComponent } from './provedores/provedores.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pay',
    component: PayInfoComponent
  },
  {
    path: 'provedores',
    component: ProvedoresComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
