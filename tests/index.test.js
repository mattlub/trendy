import { updateStarredRepos } from '../src/utils'
import { repos, starred } from './fixtures'

QUnit.test('test updateStarredRepos function when adding a repo', assert => {
  const id = 999999
  const originalLength = starred.length
  const result = updateStarredRepos(starred, id)
  
  assert.notOk(
    starred.includes(id),
    'original starred repos should not contain test id')
  assert.ok(
    result.length === originalLength + 1,
    'updated starred repos should have correct length')
  assert.ok(
    result.includes(id),
    'updated starred repos should include new id')
  assert.ok(
    starred.length === originalLength,
    'function should not mutate original array')
})

QUnit.test('test updateStarredRepos function when removing a repo', assert => {
  const id = 123456
  const originalLength = starred.length
  const result = updateStarredRepos(starred, id)
  
  assert.ok(
    starred.includes(id),
    'original starred repos should contain test id')
  assert.ok(
    result.length === originalLength - 1,
    'updated starred repos should have correct length')
  assert.notOk(
    result.includes(id),
    'updated starred repos should not include new id')
  assert.ok(
    starred.length === originalLength,
    'function should not mutate original array')
})
