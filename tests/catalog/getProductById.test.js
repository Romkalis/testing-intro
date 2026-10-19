const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

test('Тест: ID 1 возвращает products[0]', () => {
  expect(getProductById(products, 1)).toEqual(products[0])
})

test('Тест: ID 4 возвращает products[3]', () => {
  expect(getProductById(products, 4)).toEqual(products[3])
})

test('Тест: ID 6 возвращает products[5]', () => {
  expect(getProductById(products, 6)).toEqual(products[5])
})

test('Тест: ID 0 возвращает null', () => {
  expect(getProductById(products, 0)).toEqual(null)
})
test('Тест: ID 999 возвращает null', () => {
  expect(getProductById(products, 999)).toEqual(null)
})
test('Тест: строковый ID "1" возвращает null', () => {
  expect(getProductById(products, "1")).toEqual(null)
})
test('Тест: ID undefined возвращает null', () => {
  expect(getProductById(products, "1")).toEqual(null)
})
test('Тест:  ID NaN возвращает null', () => {
  expect(getProductById(products, NaN)).toEqual(null)
})

