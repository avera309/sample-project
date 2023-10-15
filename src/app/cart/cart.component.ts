import { Component } from '@angular/core';
import { Cart, CartItem } from './../callouts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
cart: Cart = {items: [
{  category: 'string',
  id: 1,
  name: 'string',
  href: 'any',
  price: 'string',
  imageSrc: 'any',
  imageAlt: 'any',
quantity:1
}
]};
dataSource:Array<CartItem> =[];
displayedColumuns:Array<string>=[
  'category',
  'id',
  'name',
  'href',
  'price',
  'total',
  'action'
];

ngOnInit():void{
  this.dataSource=this.cart.items;
}
}
