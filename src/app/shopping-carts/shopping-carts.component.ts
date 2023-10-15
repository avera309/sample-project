import { Component,  Input } from '@angular/core';
import { Cart,CartItem } from '../callouts';



@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.css']
})
export class ShoppingCartsComponent {

slide(){
  const slideStatus=document.getElementById('slide');
  console.log();
  
  slideStatus?.classList.replace('slideout','slidein');
  
}
close(){
  const slideStatus=document.getElementById('slide');
  slideStatus?.classList.replace('slidein','slideout');
}

cart: Cart = { items:[{
  category: 'string',
  id: 1,
  name: 'string',
  href: '#',
  price: 'string',
  imageSrc: '#',
  imageAlt: '#',
  quantity:1
}]};
dataSource: Array<CartItem>=[];
displayedColumuns: Array<string>=[
  'category',
  'name'
]

ngOnInit(): void {
  this.dataSource=this.cart.items;
}
}
