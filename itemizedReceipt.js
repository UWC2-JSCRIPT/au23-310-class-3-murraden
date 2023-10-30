// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...items) => {
  const taxRate = 0.065;
  let total = 0;
  items.forEach((item)=>{
      total += item.price;
      console.log(item.descr, '-', item.price);
})

const totalTax = (total * taxRate);

const roundToHundredth = (value) => {
  return Number(value.toFixed(2));
}

console.log(`Subtotal = $${total}`);

console.log(`Sales Tax = $${roundToHundredth(totalTax)}`);

console.log(`Total = $`, roundToHundredth(total + roundToHundredth(totalTax)));
};



// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 },
  { descr: 'Add Black Beans', price: 0.99 },
  { descr: 'Side Sour Cream', price: 1.79 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
