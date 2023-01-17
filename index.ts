var fruits = [
  'pomme',
  'tomate',
  'banane',
  'kiwi',
  'mangue',
  'pasteque',
  'melon',
  'poire',
  'raisin',
  'groseille',
  'pêche',
  'citron',
  'orange',
];

function generateCart() {
  let size = Math.round(Math.random() * 15 + 1); // génère un nombre compris entre 1 et 16
  let cart = [];
  for (let i = 0; i <= size; i++) {
    cart.push(generateRandomFruit());
  }
  return cart;
}

function generateRandomFruit() {
  return fruits[Math.round(Math.random() * (fruits.length - 1))];
}

var fruitsSearch = [generateRandomFruit(), generateRandomFruit()];

console.log('Fruit recherché : ', fruitsSearch);
console.log('Panier de fruit : ', generateCart());
