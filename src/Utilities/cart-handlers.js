export const updateCart = (cart, ship, qty) => {
  const newCart = [...cart];
  ship.qty = qty;
  let dupe = false;
  console.log(qty);

  for (let i = 0; i < newCart.length; i++) {
    if (newCart[i].url === ship.url) {
      newCart[i].qty = newCart[i].qty + ship.qty;
      dupe = true;
    }
    console.log(ship);
  }

  if (newCart.length === 0 || dupe === false) {
    newCart.push(ship);
  }
  return newCart;
};

export const deleteShip = (cart, ship) => {
  const newCart = [...cart];

  for (let i = 0; i < newCart.length; i++) {
    if (newCart[i].created === ship.created) {
      newCart.splice(i, 1);
    }
  }

  return newCart;
};
