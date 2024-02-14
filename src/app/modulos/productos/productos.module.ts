import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListaComponent } from '../../componentes/productos-lista/productos-lista.component';
import { ProductosComponent } from '../../componentes/productos/productos.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    ProductosListaComponent,
    ProductosComponent,

  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    CardModule,
  ],
  exports:[
    ProductosListaComponent,
    ProductosComponent,
  ],

})
export class ProductosModule { }
