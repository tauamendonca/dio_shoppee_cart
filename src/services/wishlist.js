//quais açoes minha wishlist pode fazer

// ✅ -> adicionar item na wishlist
async function addItem(userWishlist, item) {
  userWishlist.push(item);
}


// ✅ -> deletar item da wishlist
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


// ✅ -> mostra todos os items da wishlist
async function displayWishlist(userWishlist) {
  console.log("\nYour 🛍️ Shopee Wishlist:");
  userWishlist.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price}`
    );
  });
}

export { addItem, deleteItem, displayWishlist };