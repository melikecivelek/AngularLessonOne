import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  styles = {
    container:{
      'min-height':'15rem',
      'margin-bottom':'10px',
    },
    title:{

    },
    body:{

    }
  }

  
  // apiden gelen datalar observable tipinde olacak.
  // observable olan birşeyin sonuna $ ifadesi konur.
  products$ : Observable<any[]> | undefined; 
  //  products$ olan şeyleri typscripte de subscribe ederiz yada html de async pipe kullanırız. Observable tipindeki yapılar asenkron çalışır.

  constructor(private http:HttpClient) { } // Servisler componentin contructure bağlanır;


 async ngOnInit(): Promise<void> {

  this.products$ = this.http.get<any[]>('https://northwind.vercel.app/api/products');


  // this.products$ = this.http.get<any[]>('https://northwind.vercel.app/api/products').pipe(map((products:any) => {
  //   console.log('products', products);
  //   // item['price'] = 10;

  //   products.map((item:any) => {
  //     item.price = item.unitPrice;
  //   })
   
  //   return [... products];
  // }));



  

}

}
