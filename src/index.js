import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");


// =============================================== //
// Trabalhando com o carrinho:

//criando dois itens
const item1 = await createItem("Cheese Gyudon", 20.99, 1);
const item2 = await createItem("Oyakodon", 39.99, 4);

// Adicionar dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Remove o item2 (Oyakodon)
// *Adicionado o quantity = 3 para poder simular a remoção de 3 unidades
// *No projeto inicial o método era chamado 3 vezes
const quantity = 3;

await cartService.removeItem(myCart, item2, quantity);

await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);

// =============================================== //


