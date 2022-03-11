import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { BsModalComponent } from './bs-modal/bs-modal.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';


// NgModule modül olduğunu belirtir.
@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    CounterButtonComponent,
    BsModalComponent
  ], // component yazılır. Bu modül içerisindeki component
  imports: [
    CommonModule,
    RouterModule,
    ModalModule
  ],
  exports:[
    // AppComponente Layout kullanacağız.
    LayoutComponent,
    CounterButtonComponent,
    ButtonComponent,
    BsModalComponent

  ],
  //providers:[BsModalService] // eğer servisi module provider olarak tanıtırsak servis singleton çalışıyor. eğer component içerisinde kullanırsak da transient çalışıyor. // pagelerde servisleri singleton tercih ediyoruz.
})
export class ComponentsModule { }
