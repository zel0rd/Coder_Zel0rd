// npm i -D jest

const hashmap = require("./hashmap.js")
// const {test, assert} = require("./tester.js")
const assert = require('assert')


// given
// when
// then
test('clear test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')

    // when
    ht.clear()

    // then
    assert.equal(ht.size(),0)

})

test('contain test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')

    // when
    result = ht.contains('JohnSmith')

    // then
    assert.equal(result,true)
}) 

test('getValue test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')

    // when
    result = ht.getValue('JohnSmith')

    // then
    assert.equal(result,'521-1234')
}) 

test('isEmpty test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')

    // when
    ht.clear()
    result = ht.size()

    // then
    assert.equal(result,0)
}) 

test('keys test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')
    ht.put('LisaSmith','521-8976')
    ht.put('SandraDee','521-9655')

    // when
    result = ht.keys().length
    // then
    assert.equal(result, ['JohnSmith','LisaSmith','SandraDee'].length)
}) 

test('put test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')
    ht.put('LisaSmith','521-8976')
    ht.put('SandraDee','521-9655')

    // when
    result = ht.contains('JohnSmith')
    // then
    assert.equal(result, true)
}) 

test('remove test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')
    ht.put('LisaSmith','521-8976')
    ht.put('SandraDee','521-9655')

    // when
    ht.remove('JohnSmith')
    result = ht.contains('JohnSmith')
    // then
    assert.notEqual(result, true)
}) 

test('replace test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')

    // when
    ht.replace('JohnSmith','111-1111')
    result = ht.getValue('JohnSmith')
    // then
    assert.equal(result, '111-1111')
}) 

test('size test', () => {
    // given
    const ht = new hashmap();
    ht.put('JohnSmith','521-1234')
    ht.put('LisaSmith','521-8976')
    ht.put('SandraDee','521-9655')

    // when
    result = ht.size()

    // then
    assert.equal(result, 3)
}) 