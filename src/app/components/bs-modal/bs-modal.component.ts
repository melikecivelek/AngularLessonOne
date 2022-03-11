import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bs-modal',
  templateUrl: './bs-modal.component.html',
  styleUrls: ['./bs-modal.component.css'],
  providers:[ BsModalService ] // net core startup daki transient karşılık gelir. // component her çağrıldığında BsModalService instance üretir. null injector hatası almamızın sebebi provider tanımlaması yapmamamızdı
})
export class BsModalComponent implements OnInit {

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {} // dependency injection var. component içerisinde servislere bağlanırken dependency injection yapıyoruz. modalService instance alınmış oldu

  
  @Input() header:string = ''
  @Input() body:string = '';
  @Input() modalButtonTitle:string = 'Open'

  ngOnInit(): void {
  
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
