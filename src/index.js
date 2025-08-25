import * as cartService from "./services/cart.js";
import * as wishListService from "./services/wishlist.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");


// =============================================== //
// Trabalhando com o carrinho:

//criando dois itens
const item1 = await createItem(1, "Cheese Gyudon", 20.99, 1);
const item2 = await createItem(2, "Oyakodon", 39.99, 3);
const item3 = await createItem(2, "Curry Udon", 24.99, 4);

// Adicionar dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Remove o item2 (Oyakodon)
// O método é chamado mais de uma vez pois simula cliques no ícone de remover 1 de quantidade do carrinho
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);

// =============================================== //

// A Wishlist:

// Adicionar três itens à wishlist
await wishListService.addItem(myWishList, item1);
await wishListService.addItem(myWishList, item2);
await wishListService.addItem(myWishList, item3);

// Remove o item1 da Wishlist (Gyudon)
await wishListService.deleteItem(myWishList, item1);

// Exibe toda a wishlist
await wishListService.displayWishlist(myWishList);

// =============================================== //