import { CartService } from '../cart.service';
import { productList, CartItem } from './../callouts';
import { Component } from '@angular/core';
import {producstList,CategoryPreviews} from '../category';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent {
CategoryPreviews=CategoryPreviews;
productsList=producstList ;

category='home';
constructor(private route: ActivatedRoute) { }
 ngOnInit(): void {
   this.category=this.route.snapshot.params['category'];
 }
categorys:string | undefined;
/*onAddToCart(product: productList):void{
this.cartService.addToCart({
category: product.category,
id: product.id,
name: product.name,
href: product.href,
price: product.price,
imageSrc: product.imageSrc,
imageAlt: product.imageAlt,
quantity: 1

});
}*/
}
