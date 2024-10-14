// Initial shopping cart array
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. Add 'Meat' at the beginning if not already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// 2. Add 'Sugar' at the end if not already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// 3. Remove 'Honey' if allergic
const isAllergicToHoney = true; 
if (isAllergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}

// 4. Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

// Display the updated shopping cart
console.log(shoppingCart);
