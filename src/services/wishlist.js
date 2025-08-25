import { filterItemList } from "./utils.js";

//AÇÕES DA WISHLIST

// ✅ -> Adicionar item na wishlist
async function addItem(userWishlist, item) {
  userWishlist.push(item);
}


// ✅ -> Deletar item da wishlist
async function deleteItem(userWishlist, item) {
  //1. Encontrar o indice do item
  const indexFound = userWishlist.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. Deletar o item
    userWishlist.splice(indexFound, 1); 
    return;
}


// ✅ -> Mostrar todos os items da wishlist
async function displayWishlist(userWishlist) {
  console.log("\nYour 🛍️ Shopee Wishlist:");
  userWishlist.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price}`
    );
  });
}


// ✅ -> Listar itens de acordo com o filtro selecionado (vide utils.js)
async function filterItem(userWishlist, filter) {
  let filteredItems = await filterItemList(userWishlist, filter);
  console.log(`
See your items by ${filter}`);
  Array.from(filteredItems).forEach((element) => console.log(`Item: ${element.name} | Price: ${element.price} | Quantity: ${element.quantity}`))
}


export { addItem, deleteItem, displayWishlist, filterItem };