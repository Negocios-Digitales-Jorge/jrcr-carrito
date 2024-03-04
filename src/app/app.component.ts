import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jrcr-shop';
  showCart: boolean=false

  toogleCart(){
    this.showCart= !this.showCart
  }
}
