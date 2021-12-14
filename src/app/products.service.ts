import { Injectable } from '@angular/core';
import { Product } from './components/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Product[]{
    return[
      new Product(1,"fried chicken",100,20,"https://img.wongnai.com/p/1920x0/2017/09/27/e3e5610ce8d9486aa9b1c33a83d7ab26.jpg"),    
      new Product(2,"nugget",100,20,"https://img.wongnai.com/p/1920x0/2017/09/27/e3e5610ce8d9486aa9b1c33a83d7ab26.jpg"),
      new Product(3,"mashed potato",100,20,"https://img.wongnai.com/p/1920x0/2017/09/27/e3e5610ce8d9486aa9b1c33a83d7ab26.jpg"),
      new Product(4,"egg tart",100,20,"https://img.wongnai.com/p/1920x0/2017/09/27/e3e5610ce8d9486aa9b1c33a83d7ab26.jpg"),
      new Product(5,"Chicken Burger",100,20,"https://img.wongnai.com/p/1920x0/2017/09/27/e3e5610ce8d9486aa9b1c33a83d7ab26.jpg"),
      new Product(6,"kfc",100,20,"https://img.wongnai.com/p/1920x0/2017/09/27/e3e5610ce8d9486aa9b1c33a83d7ab26.jpg"),
    ];
  }
}
