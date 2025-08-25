// Aqui realizei a lógica de filtro de itens separadamente,
// para facilitar encontrar essa modificação e poder demonstrar
// ela sendo utilizada tanto no carrinho de compras quanto na wishlist

export async function filterItemList(itemList, filter) {
  let items = [];

  switch (filter) {
    case "name": {
     items = itemList.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // para ignorar maiúsculas e mínusculas
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // caso os nomes sejam iguais
        return 0;
      });
      break;
    }
    case "price": {
      items = itemList.sort((a, b) => b.price - a.price);
      break;
    } 
    case "quantity": {
      items = itemList.sort((a, b) => b.quantity - a.quantity);
      break;
    } 
    default:
      items = itemList.sort((a, b) => b.id - a.id)
  } 

  return items;
}