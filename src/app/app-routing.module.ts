import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "product",
        component: ProductComponent
    },
    {
        path: "cart",
        component: CartComponent
    }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })

export class AppRoutingModule { }
