import { createReducer, on } from "@ngrx/store";
import { addItem, removeItem } from "./cart.actions";
export const cartState = [];
const _cartReducer = createReducer(
    cartState,
    on(addItem, (state, item) => {
        // Procura o item (que é o item que o usario passou) dentro dos item que ja temos.
        let itemEncontrado = state.find((itemExistente) => itemExistente.id === item.id)
        // Vefica se encontrou
        if (itemEncontrado) {
            // caso tenha encontrado...
            return state.map((itemExistente) => {
                // Pega o item que ja tem e guarda na variavel item a ser alterado (itemAlterado)
                let itemAlterado = itemExistente;
                // Verifica se o item que vai ser alterado é igual ao item que o usúario passou
                if (itemAlterado.id === itemEncontrado.id) {
                    // caso seja igual ele cria um novo item com as mesmas propriedades falando que o quant vai ser mais 1
                    itemAlterado = { ...itemExistente, quant: itemExistente.quant + 1 }
                }
                // Caso o item não seja o que o usúario passou, ele sisplemente não altera e retorna igual
                return itemAlterado;
                // Retorna o item depois de ter sido manipulado para formar o novo carrinho
            })
        } else {
            // retorna lista com o novo item, porém com a quantidade de 1
            return [...state, { ...item, quant: 1 }];
        }
    }),
    on(removeItem, (state, item) => state.filter((cartItem) => cartItem.id !== item.id))

        //     // Procura o item (que é o item que o usario passou) dentro dos item que ja temos.
        //     let itemEncontrado = state.find((itemExistente) => itemExistente.id === item.id)
        //     // Vefica se encontrou
        //     if (itemEncontrado) {
        //         // caso tenha encontrado...
        //         return state.map((itemExistente) => {
        //             // Pega o item que ja tem e guarda na variavel item a ser alterado (itemAlterado)
        //             let itemAlterado = itemExistente;
        //             // Verifica se o item que vai ser alterado é igual ao item que o usúario passou
        //             if (itemAlterado.id === itemEncontrado.id) {
        //                 // caso seja igual ele cria um novo item com as mesmas propriedades falando que o quant vai ser mais 1
        //                 itemAlterado = { ...itemExistente, quant: itemExistente.quant + 1 }
        //             }
        //             // Caso o item não seja o que o usúario passou, ele sisplemente não altera e retorna igual
        //             return itemAlterado;
        //             // Retorna o item depois de ter sido manipulado para formar o novo carrinho
        //         })
        //     } else {
        //         // retorna lista com o novo item, porém com a quantidade de 1
        //         return [...state, { ...item, quant: 1 }];
        //     }
        // }),

);
export function cartReducer(state: any, action: any) {
    return _cartReducer(state, action);
}