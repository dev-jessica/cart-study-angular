import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';
import { addItem, removeItem } from '../reducer/cart/cart.actions';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  title = 'cart-study-angular';
  count$: Observable<number>;
  cart$: Observable<Array<any>>;
  value = 'Clear me';
  durationInSeconds = 5;


  produtos = [
    {
      id: 1,
      name: 'Perfume',
      price: 100.0
    },
    {
      id: 3,
      name: 'Camiseta branca',
      price: 20.0
    },
    {
      id: 4,
      name: 'Camiseta azul marinho',
      price: 40.0
    }
  ]
 
  constructor(
    private store: Store<{ count: number, cart: Array<any> }>
    ) {
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
    this.store.dispatch(addItem(item));
  }

    removeItem(id: number) {
    this.store.dispatch(removeItem({ id }))
  }
 
  

}




