import * as cartService from "./services/cart.js";
import * as wishListService from "./services/wishlist.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");


// =============================================== //
// Trabalhando com o carrinho:

//criando itens
const item1 = await createItem(1, "Cheese Gyudon", 20.99, 1);
const item2 = await createItem(2, "Oyakodon", 39.99, 3);
const item3 = await createItem(2, "Curry Udon", 24.99, 4);
const item4 = await createItem(2, "Kitsune Soba", 19.50, 2);
const item5 = await createItem(2, "Yaki Udon", 17.50, 1);


// Adicionar itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);


//Filtra e exibe os itens filtrados, de acordo com o tipo de filtro passado
await cartService.filterItem(myCart, "quantity");
await cartService.filterItem(myCart, "price");

// Remove o item2 (Oyakodon)
// O método é chamado mais de uma vez pois simula cliques no ícone de remover 1 de quantidade do carrinho
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

// Deleta item do carrinho, independente da quantidade
await cartService.deleteItem(myCart, item3.name);

await cartService.calculateTotal(myCart);




// =============================================== //

// A Wishlist:

// Adicionar três itens à wishlist
await wishListService.addItem(myWishList, item1);
await wishListService.addItem(myWishList, item2);
await wishListService.addItem(myWishList, item3);
await wishListService.addItem(myWishList, item4);
await wishListService.addItem(myWishList, item5);

//Filtra e exibe os itens filtrados, de acordo com o tipo de filtro passado
await wishListService.filterItem(myWishList, "name");

// Remove o item1 da Wishlist (Gyudon)
await wishListService.deleteItem(myWishList, item1);
await wishListService.deleteItem(myWishList, item4);

// Exibe toda a wishlist
await wishListService.displayWishlist(myWishList);

// =============================================== //