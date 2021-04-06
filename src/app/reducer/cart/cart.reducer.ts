import { createReducer, on } from "@ngrx/store";
import { addItem, removeItem } from "./cart.actions";

export const cartState = [];

const _cartReducer = createReducer(
    cartState,
on(addItem, (state, item) =>  [...state, item]),
on(removeItem, (state, item) => state.filter((cartItem) => cartItem.id !== item.id))
);


export function cartReducer(state: any, action:any){
    return _cartReducer(state, action);
}
