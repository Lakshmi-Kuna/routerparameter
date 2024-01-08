import { Component } from '@angular/core';
import { ProductInf } from '../../contract/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
public Details:ProductInf={
  id:0,
  title:'',
  price:0,
  description:'',
  category:'',
  image:'',
  rating:{
      rate:0,
      count:0
  }
}
public id:any=''
constructor(private route:ActivatedRoute,private serv:ProductService){}
ngOnInit(){
  this.id=this.route.snapshot.paramMap.get('id');
  this.serv.getProductsById(this.id).subscribe(data=>this.Details=data);
}
}
