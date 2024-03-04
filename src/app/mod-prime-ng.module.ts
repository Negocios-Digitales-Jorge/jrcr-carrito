import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';

const componentes: any = [
  ButtonModule,
  CardModule,
  InputText,
  ToastModule,
  SidebarModule,
  DataView,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    
  ]
})
export class ModPrimeNgModule { }
