import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(
    private productService: ProductsService
  ) {

  }

  ngOnInit() {
    //when this HomeComponent is first initialized, ngOnInit will run
    this.productService
    .getProducts('http://localhost:3000/clothes', {page: 0, perPage: 5})
    .subscribe((products: Products) => {
      console.log(products.items);
    })
  }
}
