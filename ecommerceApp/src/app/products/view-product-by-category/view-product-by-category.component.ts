import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {

  searchCategory: Category[] = [];
  productList: Product[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(data => {
    console.log(data);
    this.searchCategory = data['id'];
    console.log(this.searchCategory);
    this.productsService.searchCategoryProducts(this.searchCategory).subscribe((categoryData) => {
      console.log(categoryData);
      this.productList = categoryData;
    });
  });

  }

}
