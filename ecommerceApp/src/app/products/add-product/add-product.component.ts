import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: { value: { product_category: any; product_name: any; product_description: any; product_rating: any; product_price: any; product_color: any; }; }){
    console.log(form.value);

    let newProduct = {
        id: 11,
        categoryId: form.value.product_category,
        productName: form.value.product_name,
        description: form.value.product_description,
        rating: form.value.product_rating,
        price: form.value.product_price,
        productImg: '',
        isAvailable: 1,
        color: form.value.product_color,
        reviews: form.value.product_category,
    };

    console.log(newProduct);

    this.productsService.createProduct(newProduct).subscribe(data => {
      console.log(data);
    });

  }

}
