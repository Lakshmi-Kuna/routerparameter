import { Component } from '@angular/core';
import { ProductInf } from '../../contract/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public ProductI:ProductInf[]=[];
constructor(private serv:ProductService){}
ngOnInit(){
  this.serv.getProducts().subscribe(data=>{
    this.ProductI=data;
  })
}
}
