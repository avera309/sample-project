import { productList } from './../callouts';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryPreviews, producstList} from '../category';
import { find } from 'rxjs';

@Component({
  selector: 'app-product-overviews',
  templateUrl: './product-overviews.component.html',
  styleUrls: ['./product-overviews.component.css']
})
export class ProductOverviewsComponent {
@Input() fullWidthMode =false;
category=1;
  CategoryPreviews=CategoryPreviews;
productsList=producstList ;
products:productList| undefined={
  category: 'string',
  id: 1,
  name: 'string',
  Description:'string',
  href: 'any',
  price: 'string',
  imageSrc: 'any',
  imageAlt: 'any',
};
@Output() addToCart = new EventEmitter();
id=0;
constructor(private route:ActivatedRoute){}
ngOnInit(): void {
  const isNumberOnly = this.route.snapshot.data['numberOnly'];
  const productParam = this.route.snapshot.params['Product'];
this.id=productParam;
  console.log(this.id);

  if (isNumberOnly && !this.isValidNumber(productParam)) {
    // Handle the case when the productParam is not a valid number
    console.error('Invalid product parameter');
  } else {
    // Proceed with the valid productParam
  }
}
private isValidNumber(value: any): boolean {
  return typeof value === 'string' && !isNaN(Number(value));
}

categorys:string | undefined;
product = this.productsList.find(s=>s.id === this.id);
onAddToCart():void{

  this.addToCart.emit(this.products);
}
f(){
  console.log(this.id); 
}
}
