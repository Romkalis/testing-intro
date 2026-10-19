const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

test('Тестируем - Наушники возвращает товар с ID 1', () => {
  const goods = [{ id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 }]
  expect(searchProducts(products, "Наушники")).toEqual(goods)
})

test('Тестируем - Чистый код возвращает товар с ID 6', () => {
  const goods = [{ id: 6, name: 'Чистый код', category: 'books', price: 21900, stock: 0 }]
  expect(searchProducts(products, "Чистый код")).toEqual(goods)
})

test('Тестируем - Настольная лампа возвращает товар с ID 4', () => {
  const goods = [{ id: 4, name: 'Настольная лампа', category: 'home', price: 27900, stock: 3 }]
  expect(searchProducts(products, "Настольная лампа")).toEqual(goods)
})

test('Тестируем - javascript возвращает товар с ID 3', () => {
  const goods = [{ id: 3, name: 'JavaScript для начинающих', category: 'books', price: 18900, stock: 14 }]
  expect(searchProducts(products, "javascript")).toEqual(goods)
})

test('Тестируем - ЧЕХОЛ возвращает товар с ID 5', () => {
  const goods = [{ id: 5, name: 'Чехол для ноутбука', category: 'home', price: 24900, stock: 6 }]
  expect(searchProducts(products, "ЧЕХОЛ")).toEqual(goods)
})

test('Тестируем - наушники возвращает товар с ID 1', () => {
  const goods = [{ id: 1, name: 'Наушники', category: 'electronics', price: 49900, stock: 8 }]
  expect(searchProducts(products, "наушники")).toEqual(goods)
})

test('Тестируем - "" возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
  expect(searchProducts(products, "")).toEqual(products)
})

test('Тестируем - строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
  expect(searchProducts(products, "    ")).toEqual(products)
})

test('Тестируем - "\t\n" возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
  expect(searchProducts(products, "\t\n")).toEqual(products)
})

