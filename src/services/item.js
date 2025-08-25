//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(id, name, price, quantity) {
  return {
    id,
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}

export default createItem;
