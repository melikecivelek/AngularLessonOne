import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  body:string = '';
  header:string = '';

  constructor() { }

  ngOnInit(): void { // component sayfada görüntülenmeden önce bu çalışır.
    // sayfaya yüklenecek apiden gelecek veriler burada çekilir. juerydeki ready benzer veya reactjsdeki useEffect benzer.

    // ngOnInit component ilk yüklenirken çalışan hook. constructordan sonra çalışır. component lifecyle ilk adımı.

    this.header = '<h1>Hakkımızda Modal</h1>';
    this.body = '<p> <b>2018</b> yılında kurulan bir <i>yazılım</i> firmasıyız</p>';


  }

}
