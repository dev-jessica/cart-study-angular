import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';
import { addItem, removeItem, removeTotal } from '../reducer/cart/cart.actions';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  title = 'cart-study-angular';
  count$: Observable<number>;
  cart$: Observable<Array<any>>;

  constructor(private store: Store<{ count: number, cart: Array<any> }>) {
    this.count$ = store.select('count')
    this.cart$ = store.select('cart');
  }
  ngOnInit(): void {
  }

  addItem(item: any) {
    // this.store.dispatch(addItem({ id: 1, name: 'Perfume', quant: 2, price: 100.0 }))
    this.store.dispatch(addItem(item))
  }
  removeItem(id: number) {
    this.store.dispatch(removeItem({ id }))
  }

  sumTotal(cart) {
    console.log("passou", cart)
    return cart.reduce((a, b) => a + (b.price *b.quant), 0)
  }

  sumQtd(cart) {
    return cart.reduce((a, b) => a + b.quant, 0)
  
  }

  sumQtdPrice(cart, id) {
    let item = cart.find(cartItem => cartItem.id === id);
    return item.quant * item.price;
  }

  removeTotal(id: number) {
    this.store.dispatch(removeTotal({ id }))
  }


}

