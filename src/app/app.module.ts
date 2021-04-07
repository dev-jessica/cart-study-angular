import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';



import { AppComponent } from './app.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';

import { counterReducer, initialState } from './counter.reducer';
import { cartReducer } from './reducer/cart/cart.reducer';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    CartComponent
    ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer, cart: cartReducer }),
    BrowserAnimationsModule, 
    FormsModule,
    MatButtonModule, 
    MatGridListModule, 
    MatListModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatBadgeModule,
    MatTooltipModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
