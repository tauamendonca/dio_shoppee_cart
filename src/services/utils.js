// Aqui realizei a lógica de filtro de itens separadamente,
// para facilitar encontrar essa modificação e poder demonstrar
// ela sendo utilizada tanto no carrinho de compras quanto na wishlist

export async function filterItemList(itemList, filterBy) {
  switch (filterBy) {
    case "name": {
      itemList.sort((a, b) => b.name - a.name);
      break
    }
    case "price": {
      itemList.sort((a, b) => b.price - a.price);
      break;
    } 
    case "quantity": {
      itemList.sort((a, b) => b.quantity - a.quantity);
      break;
    } 
    default:
      itemList.sort((a, b) => b.id - a.id)
  } 

  return itemList;
}

