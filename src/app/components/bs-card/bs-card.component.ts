import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-bs-card',
  templateUrl: './bs-card.component.html',
  styleUrls: ['./bs-card.component.css']
})
export class BsCardComponent implements OnInit {

  // ng template input olarak karşılayabilmek için @input TemplateRef<any> tipinde tanımlarız.
  @Input()
  titleTemplate!: TemplateRef<any> | null;
  @Input()
  bodyTemplate!: TemplateRef<any> | null;
  @Input() buttonText:string = '';
  @Input() styles:any;

  @Input() item:any;



  constructor() { }

  ngOnInit(): void {
    // console.log('bodyTemplate', this.bodyTemplate)
  }

}
