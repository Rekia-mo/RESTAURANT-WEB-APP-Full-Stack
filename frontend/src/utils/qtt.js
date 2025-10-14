
export function quantityCount(cart) {
  let totalQuantity = 0;

  cart && cart.items.forEach(item => {
    totalQuantity += item.quantity;
  })
    return totalQuantity;
  }