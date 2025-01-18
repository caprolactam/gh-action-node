import assert from 'node:assert'
import test from 'node:test'
import { sum } from './index.js'

test('sum', () => {
  const sut = sum(1, 2)
  assert.equal(sut, 1 + 2)
})

test('fail substraction', () => {
  const sut = sum(2, 1)

  assert.notEqual(sut, 2 - 1)
})
