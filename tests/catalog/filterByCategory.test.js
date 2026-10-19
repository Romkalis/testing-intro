const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

test("проверка фильтра со значением all", () => {
  expect(filterByCategory(products, "all")).toEqual(products);
});
test("проверка фильтра со значением undefined", () => {
  expect(filterByCategory(products, undefined)).toEqual(products);
});
test('проверка фильтра со значением ""', () => {
  expect(filterByCategory(products, "")).toEqual(products);
});

test("проверка фильтра со значением electronics", () => {
  const goods = [
    {
      id: 1,
      name: "Наушники",
      category: "electronics",
      price: 49900,
      stock: 8,
    },
    {
      id: 2,
      name: "Клавиатура",
      category: "electronics",
      price: 35900,
      stock: 0,
    },
  ];
  expect(filterByCategory(products, "electronics")).toEqual(goods);
});

test("проверка фильтра со значением books", () => {
  const goods = [
    {
      id: 3,
      name: "JavaScript для начинающих",
      category: "books",
      price: 18900,
      stock: 14,
    },
    {
      id: 6,
      name: "Чистый код",
      category: "books",
      price: 21900,
      stock: 0,
    },
  ];
  expect(filterByCategory(products, "books")).toEqual(goods);
});

test('проверка фильтра со значением home"', () => {
  const goods = [
    {
      id: 4,
      name: "Настольная лампа",
      category: "home",
      price: 27900,
      stock: 3,
    },
    {
      id: 5,
      name: "Чехол для ноутбука",
      category: "home",
      price: 24900,
      stock: 6,
    },
  ];
  expect(filterByCategory(products, "home")).toEqual(goods);
});
test('проверка фильтра со значением clothes"', () =>
  expect(filterByCategory(products, "clothes")).toEqual([]));
test('проверка фильтра со значением toys"', () =>
  expect(filterByCategory(products, "toys")).toEqual([]));
test('проверка фильтра со значением sports"', () =>
  expect(filterByCategory(products, "sports")).toEqual([]));


