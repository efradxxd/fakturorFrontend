import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { PayInfoComponent } from './pay-info/pay-info.component';
import { ProvedoresComponent } from './provedores/provedores.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrerUserComponent } from './registrer-user/registrer-user.component';
import {
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    PayInfoComponent,
    ProvedoresComponent,
    LoginComponent,
    RegistrerUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatMenuModule,
    MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
