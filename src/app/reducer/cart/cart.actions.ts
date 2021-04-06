import { createAction, props } from "@ngrx/store";

export const addItem = createAction("[Cart Component] addItem", props<{id: Number, name: String, quant: Number, price: Number }>());
export const removeItem = createAction("[Cart Component] removeItem", props<{id: Number}>());