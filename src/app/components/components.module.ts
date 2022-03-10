import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';


// NgModule modül olduğunu belirtir.
@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent
  ], // component yazılır. Bu modül içerisindeki component
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutComponent,
    ButtonComponent // AppComponente Layout kullanacağız.
  ]
})
export class ComponentsModule { }
