//AÇÕES DO CARRINHO DE COMPRAS

// ✅ -> Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ -> Calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}

// ✅ -> Deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// ✅ -> Remover um item - diminuir a quantidade de um item
async function removeItem(userCart, item, quantity) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound] !== null) {
    userCart[indexFound].quantity -= quantity;
    //4. caso a quantidade esteja zerada deletar o item
    if (userCart[indexFound].quantity <= 0) {
      userCart.splice(indexFound, 1);
    return;
  }
    return;
  }
  
}

// ✅ -> Mostrar todos os items do carrinho
async function displaycart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart };
