import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // eğer tek satır değilse bir logic varsa method yapıyoruz
  downControl() {
    if(this.counter > 0){
      this.counter--;
    }
  }

}
