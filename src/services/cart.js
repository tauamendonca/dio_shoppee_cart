import { filterItemList } from "./utils.js";

//AÇÕES DO CARRINHO DE COMPRAS


// ✅ -> Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}


// ✅ -> Calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0).toFixed(2);
  console.log(`🎁Total: R$ ${result}`);
}


// ✅ -> Deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}


// ✅ -> Remover um item - diminuir a quantidade de um item
async function removeItem(userCart, item) {
  //1. Encontra o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. Se quantidade > 1 subtrair um da quantidade do item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. Caso quantidade do item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}


// ✅ -> Mostrar todos os items do carrinho
async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = R$ ${item.subtotal().toFixed(2)}`
    );
  });
}


// ✅ -> Listar itens de acordo com o filtro selecionado (vide utils.js)
async function filterItem(userCart, filter) {
  let filteredItems = await filterItemList(userCart, filter);
  console.log(`
See your items by ${filter}`);
  Array.from(filteredItems).forEach((element) => console.log(`Item: ${element.name} | Price: ${element.price} | Quantity: ${element.quantity}`))
}


export { addItem, calculateTotal, deleteItem, removeItem, displayCart, filterItem };
