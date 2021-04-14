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
      imports:[StoreModule.forRoot({ count: counterReducer, cart: cartReducer })],
      declarations: [ CartComponent ]
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
      fixture.detectChanges()
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.mat-list-item item tamanho').innerHTML).toEqual('perfume')
    });

    // it('adicionar um item no carrinho e verificar se o item foi adicionado no html', () => {
    //   fixture = TestBed.createComponent(CartComponent);      
    //   let click = fixture.debugElement.query(By.html('.mat-list-item item tamanho')).nativeElement;
    //   click.dispatchEvent(new Event('click'))
    //   expect(component.addItem.name)
    // });
});
