import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../servicios/productos.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.css'
})
export class ProductosListaComponent {



  productos: Producto[] = [];


  constructor(private servProductos: ProductosService) {

  }

  ngOnInit(): void {
    //Invocar al servicio para obtener los productos
    this.servProductos.getProductos().subscribe(
      response => this.productos = response
    );
  }

  getSeverity (product: Producto) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};


}
