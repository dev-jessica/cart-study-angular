import { addItem } from './../reducer/cart/cart.actions';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../counter.reducer';
import { cartReducer } from '../reducer/cart/cart.reducer';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ count: counterReducer, cart: cartReducer })],
      declarations: [CartComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('adicionar um item no carrinho e verificar se o item foi adicionado no html', () => {
    fixture = TestBed.createComponent(CartComponent);
    fixture.componentInstance.addItem({id: 1, name: 'teste', price: 3})
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    expect(
    compiled.querySelector('.item .tamanho').innerHTML
    ).toEqual('teste');
    });

    it('verificar total de valores no html', () => {
      fixture.componentInstance.addItem({id: 1, name: 'teste', price: 3})
      fixture.componentInstance.addItem({id: 1, name: 'teste', price: 3})
      fixture.detectChanges();
      let compiled = fixture.nativeElement;
      expect(
      compiled.querySelector('.subtitle span').innerHTML
      ).toEqual('Total: R$ 6,00');
      });

      it('verificar quantidade dos itens no html', () => {
        fixture.componentInstance.addItem({id: 1, name: 'jessica123', price: 1, quant: 1})
        fixture.componentInstance.addItem({id: 1, name: 'jessica456', price: 4, quant: 1})
        fixture.detectChanges();
        let compiled = fixture.nativeElement;
        expect(
        compiled.querySelector('.title h2').innerHTML
        ).toEqual('2 itens');
        });

});
