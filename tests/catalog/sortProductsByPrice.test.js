const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
  expect(sortProductsByPrice(products, 'asc').map(prod => prod.id)).toEqual([3, 6, 5, 4, 2, 1])
})

test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
  expect(sortProductsByPrice(products).map(prod => prod.id)).toEqual([3, 6, 5, 4, 2, 1])
})

test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
  const goods = [1, 3, 4].map( id => products.find(prod => prod.id === id))
  expect(sortProductsByPrice(goods, 'asc').map(prod => prod.id)).toEqual([3, 4, 1])
})

test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
  expect(sortProductsByPrice(products, 'desc').map(prod => prod.id)).toEqual([1, 2, 4, 5, 6, 3])
})

test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
  const goods = [3, 1, 4].map( id => products.find(prod => prod.id === id))
  expect(sortProductsByPrice(goods, 'desc').map(prod => prod.id)).toEqual([1, 4, 3])
})

test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
  const goods = [5, 2, 6].map( id => products.find(prod => prod.id === id))
  expect(sortProductsByPrice(goods, 'desc').map(prod => prod.id)).toEqual([2, 5, 6])
})

test("'asc' не меняет исходный массив [1, 3, 4]", () => {
  const goods = [1, 3, 4].map( id => products.find(prod => prod.id === id))
  const originalGoods = [...goods]
  const sortedGoods = sortProductsByPrice(goods, 'asc')
  expect(goods).toEqual(originalGoods)
})

test("'desc' не меняет исходный массив [1, 3, 4]", () => {
  const goods = [1, 3, 4].map( id => products.find(prod => prod.id === id))
  const originalGoods = [...goods]
  const sortedGoods = sortProductsByPrice(goods, 'desc')
  expect(goods).toEqual(originalGoods)
})

test('направление по умолчанию не меняет исходный массив всех товаров', () => {
  const goods = [...products]
  const originalGoods = [...goods]
  sortProductsByPrice(goods)
  expect(goods).toEqual(originalGoods)
})
