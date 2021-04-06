import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import { addItem, removeItem } from './reducer/cart/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cart-study-angular';
  count$: Observable<number>;
  cart$: Observable<Array<any>>;

  // produtos = [
  //   {
  //     id: 1,
  //     name: 'Perfume',
  //     price: 100.0
  //   },
  //   {
  //     id: 3,
  //     name: 'Camiseta branca',
  //     price: 20.0
  //   },
  //   {
  //     id: 4,
  //     name: 'Camiseta azul marinho',
  //     price: 40.0
  //   }
  // ]

  constructor(private store: Store<{ count: number, cart: Array<any> }>) {
    this.count$ = store.select('count')
    this.cart$ = store.select('cart');
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }

  addItem(item: any) {
    // this.store.dispatch(addItem({ id: 1, name: 'Perfume', quant: 2, price: 100.0 }))
    this.store.dispatch(addItem(item))
  }
  removeItem(id: number) {
    this.store.dispatch(removeItem({ id }))
  }

  aparecerTexto() {
    document.getElementById("shopping_cart01").innerHTML = "Jessica";
  }
  resetmsg() {
    document.getElementById("shopping_cart01").innerHTML = "";
  }
  
  
}

