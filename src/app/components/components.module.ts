import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { BsAlertComponent } from './bs-alert/bs-alert.component';
import { AlertModule } from 'ngx-bootstrap/alert';



// NgModule modül olduğunu belirtir.
@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    CounterButtonComponent,
    BsAlertComponent
  ], // component yazılır. Bu modül içerisindeki component
  imports: [
    CommonModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  exports:[
    LayoutComponent,
    CounterButtonComponent,
    ButtonComponent,
    BsAlertComponent // AppComponente Layout kullanacağız.

  ]
})
export class ComponentsModule { }
