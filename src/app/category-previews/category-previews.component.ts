import { callouts } from './../callouts';
import { Component, OnInit } from '@angular/core';
import {CategoryPreviews} from '../category';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-category-previews',
  templateUrl: './category-previews.component.html',
  styleUrls: ['./category-previews.component.css']
})
export class CategoryPreviewsComponent implements OnInit {
 callouts=CategoryPreviews;
 category='home';
 constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.category=this.route.snapshot.params['category'];
  }
 categorys:string | undefined;

}
