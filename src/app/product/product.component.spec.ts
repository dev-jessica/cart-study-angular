import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterReducer } from '../counter.reducer';
import { cartReducer } from '../reducer/cart/cart.reducer';
import { Product } from './product-service/product.model';
import { ProductService } from './product-service/product.service';
import { ProductComponent } from './product.component';
class MockProductService extends ProductService {
  read(): Observable<Product[]> {
    return new Observable((observer) => {
      observer.next([{ id: 1, name: 'teste2', price: 20 }])
    });
  }
}
describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        HttpClientModule,
        StoreModule.forRoot({ count: counterReducer, cart: cartReducer }),
      ],
      providers: [ProductService],
      declarations: [ProductComponent],
    }).compileComponents();
    await TestBed.overrideComponent(
      ProductComponent,
      { set: { providers: [{ provide: ProductService, useClass: MockProductService }] } }
    )
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Testar se a lista esta apresentando o nome do produto corretamente', () => {
    fixture = TestBed.createComponent(ProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.product-card mat-card-title').innerHTML).toEqual('teste2')
  });
  it('Testar se a lista esta apresentando o preço do produto corretamente', () => {
    fixture = TestBed.createComponent(ProductComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.product-card mat-card-subtitle').innerHTML).toEqual('R$ 20.00')
  });
});