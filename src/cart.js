function addToCart(cart, product, quantity = 1) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new RangeError('Количество должно быть положительным целым числом.');
  }

  const existingItem = cart.find((item) => item.id === product.id);

  const newQuantity = (existingItem ? existingItem.quantity : 0) + quantity;
  if (newQuantity > product.stock) {
    throw new RangeError('Товар закончился на складе');
  }

  if (existingItem) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    );
  }

  return [...cart, { ...product, quantity }];
}
function changeQuantity(cart, id, quantity) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new RangeError('Количество должно быть положительным целым числом.');
  }

  const item = cart.find((product) => product.id === id);
  if (!item) return cart;

  if (quantity > item.stock) {
    throw new RangeError('Товар закончился на складе');
  }

  return cart.map((product) =>
    product.id === id ? { ...product, quantity } : product
  );
}
function removeFromCart(cart, id) {
  return cart.filter((product) => product.id !== id);
}
function calculateCartSubtotal(cart) {
  return cart.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
}
function calculateOrderTotal(cart, promoCode = '') {
  const subtotal = calculateCartSubtotal(cart);
  const discount = promoCode === 'SAVE10' && subtotal >= 20000
    ? subtotal * 0.1
    : 0;
  const delivery = subtotal < 50000 ? 30000 : 0;

  return {
    subtotal,
    discount,
    delivery,
    total: subtotal - discount + delivery,
  };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
