import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() bgColor:string  = 'gray'; // c# property gibi
  @Input() fontSize:string = '24px';
  @Input() textColor:string = 'white';

  // field eğer değişkenin önüne private yazarsak htmlden erişilemez.
  links:any[] = [
    {
      url:'/',
      name:'Anasayfa'
    },
    {
      url:'/about',
      name:'Hakkımızda'
    },
    {
      url:'/contact',
      name:'İletişim'
    },
    {
      url:'product',
      name:'Ürünler'
    },
    {
      url:'counter',
      name:'Sayac'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
