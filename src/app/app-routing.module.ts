import { LandingComponent } from './landing/landing.component';
import { ProductOverviewsComponent } from './product-overviews/product-overviews.component';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { CategoryPreviewsComponent } from './category-previews/category-previews.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'ProductLists/:category', component: ProductListsComponent },
  { path: ':Product', component: ProductOverviewsComponent, pathMatch: 'full', data: { numberOnly: true } },
  { path: '', component: LandingComponent },
  { path: 'CategoryPreviews/:category', component: CategoryPreviewsComponent },
  {path: 'cart', component: CartComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
imports: [ RouterModule.forRoot(routes) ]
exports: [ RouterModule ]
