incrementValue = (num1, num2) => {
  return (num1 += num2);
};

let result1 = incrementValue(20, 2);

let amazonOrders = [
  {
    productName: "Screen Protector",
    category: "Technology",
    price: 7,
  },
  {
    productName: "Charging Cable",
    brand: "Samsung",
    category: "Technology",
    colour: "black",
    price: 12,
  },
  {
    productName: "Snail Mucin Essence",
    brand: "COSRX",
    category: "Skincare",
    price: 19,
  },
];

console.log(amazonOrders);

newOrder = (orderItem) => {
  amazonOrders.unshift(orderItem);
};

newOrder({
  productName: "Basketball",
  brand: "Wilson",
  category: "Sport",
  price: 14,
});

console.log(amazonOrders);