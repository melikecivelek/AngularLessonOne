import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 @Input() bgColor:string = 'pink';
 @Input() textColor:string = 'white';
 @Input() textStyle:string = 'italic';
 @Input() fontSize:string = '25px';
 @Input() content:string = '';
 


  constructor() { }

  ngOnInit(): void {
  }

}
