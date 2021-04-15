import { ProductService } from './product-service/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';
import { addItem, removeItem } from '../reducer/cart/cart.actions';
import { Product } from './product-service/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  title = 'cart-study-angular';
  count$: Observable<number>;
  cart$: Observable<Array<any>>;
  buscarTexto = '';

  products: Product[] = [];
  // products = [
  //   {
  //     id: 1,
  //     name: 'Perfume feminino',
  //     price: 100.0
  //   },
  //   {
  //     id: 2,
  //     name: 'Camiseta branca',
  //     price: 20.0
  //   },
  //   {
  //     id: 3,
  //     name: 'Camiseta azul marinho',
  //     price: 40.0
  //   },
  //   {
  //     id: 4,
  //     name: 'Perfume masculino',
  //     price: 100.0
  //   },
  //   {
  //     id: 5,
  //     name: 'Camiseta rosa',
  //     price: 20.0
  //   },
  //   {
  //     id: 6,
  //     name: 'Camiseta azul preta',
  //     price: 40.0
  //   },
  //   {
  //     id: 7,
  //     name: 'Cueca',
  //     price: 100.0
  //   },
  //   {
  //     id: 8,
  //     name: 'Biquini verde',
  //     price: 20.0
  //   },
  //   {
  //     id: 9,
  //     name: 'Meia',
  //     price: 40.0
  //   },
  //   {
  //     id: 10,
  //     name: 'Calcinha',
  //     price: 100.0
  //   },
  //   {
  //     id: 11,
  //     name: 'Brinco',
  //     price: 20.0
  //   },
  //   {
  //     id: 12,
  //     name: 'Tiara',
  //     price: 40.0
  //   }
  // ]

  ProductCurrent: any = []

  constructor(private _snackBar: MatSnackBar,
    private productService: ProductService,
    private store: Store<{ count: number, cart: Array<any> }>
  ) {
    this.count$ = store.select('count')
    this.cart$ = store.select('cart');
  }

  ngOnInit(): void {
    this.productService.showOnConsole('aparecer...')

    this.ProductCurrent = this.products;

    // this.productService.read().subscribe((products: Product[]) => {
    //   this.products = products
    //   console.log(products)
    // });
    
    this.productService.read().subscribe((products: Product[]) => {
      this.ProductCurrent = products
      this.products = products

      console.log(products)
    });
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
    this._snackBar.open('Produto adicionado:' + item.name, 'Fechar', {
      duration: 2000,
    });
  }

  removeItem(id: number) {
    this.store.dispatch(removeItem({ id }))
  }

  setBuscarTexto(event: any) {
    // console.log(this.buscarTexto)

    this.buscarTexto = event.target.value;
  }

  BuscarFiltro() {
    this.ProductCurrent = this.products.filter(teste => {
      return teste.name.toLowerCase().indexOf(this.buscarTexto.toLowerCase()) !== -1;


    })
  }


}




