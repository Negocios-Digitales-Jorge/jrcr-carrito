import { Component } from '@angular/core';
import { CartProductos } from '../../interfaces/cart-productos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: CartProductos[] = []

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') as string)
  }
}
