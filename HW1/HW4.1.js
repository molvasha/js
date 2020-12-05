'use strict';

function Product(name, price) {
  this.name = name;
  this.price = +price;
  this.discountPrice=+price;
}

const product1 = [
  new Product('мыло', 25),
  new Product('хлеб', 33),
  new Product('мясо', 48)];

for (Product of product1) {
  console.log(Product);

  Product.make25PercentDiscount = function () {
    this.discountPrice *= .75;
  };

  Product.make25PercentDiscount();
  console.log(Product)
}

//P.S. я не совсем поняла как делать так, чтобы метод был вне функции-конструктора. Данное решение-максимум до чего я смогла дойти)