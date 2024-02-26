import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { CartProductos } from '../../interfaces/cart-productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  @Input() producto?: Producto;

  cart: CartProductos[] = []

  constructor() {

  }
  get nombre() {
    return this, this.producto?.nombre
  }

  add() {
    console.log("Estou comprando teclado" + this.producto?.nombre)
    this.cart = JSON.parse(localStorage.getItem('cart') as string)

    if (this.cart.length > 0) {
      this.cart.forEach(elem =>{
        if(elem.id===this.producto?.id){
        elem.cantidad+=1
        }
      })
    } else {
      this.cart.push({
        id: this.producto?.id as number,
        nombre: this.producto?.nombre as string,
        descripcion: this.producto?.descripcion as string,
        precio: this.producto?.precio as number,
        imagen: this.producto?.imagen as string,
        cantidad: 1
      })
    }




    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

}
