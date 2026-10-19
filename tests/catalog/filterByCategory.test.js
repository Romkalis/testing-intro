const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

test("проверка фильтра со значением all", () => {
  expect(filterByCategory(products, "all").map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
});
test("проверка фильтра со значением undefined", () => {
  expect(filterByCategory(products, undefined).map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
});
test('проверка фильтра со значением ""', () => {
  expect(filterByCategory(products, "").map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
});

test("проверка фильтра со значением electronics", () => {
  expect(filterByCategory(products, "electronics").map(({ id }) => id)).toEqual([1, 2]);
});

test("проверка фильтра со значением books", () => {
  expect(filterByCategory(products, "books").map(({ id }) => id)).toEqual([3, 6]);
});

test("проверка фильтра со значением home", () => {
  expect(filterByCategory(products, "home").map(({ id }) => id)).toEqual([4, 5]);
});
test("проверка фильтра со значением clothes", () =>
  expect(filterByCategory(products, "clothes").map(({ id }) => id)).toEqual([]));
test("проверка фильтра со значением toys", () =>
  expect(filterByCategory(products, "toys").map(({ id }) => id)).toEqual([]));
test("проверка фильтра со значением sports", () =>
  expect(filterByCategory(products, "sports").map(({ id }) => id)).toEqual([]));
