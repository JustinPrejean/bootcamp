// the scope of this test of the board with queens generator function is ...

// test that you receive a 2D array

// var test = require('supertest');
const assert = require('assert');
const board = require('../boardWithQueens');

// first set of tests
describe('1. Test board generation function', function(){
  
  // first test (happy) .. proper 2d array returned
  it('1.1 should return an array with arrays inside it', function(){
    let result = board(8,3);
    // console.log(result)
    assert.equal(Array.isArray(result), true)
    assert.equal(result.length, 8)
  })

  // first test (sad) .. call too small a board
  it('1.2 should return error, when small board  (< 3) is requested', function(){
    assert.throws(function(){
      return board(2, 1)
    })
  })

  // second test (sad) .. call too few queens 
  it('1.3 should throw if too few queens (< 2) are requested', function(){
    let result = board(6, 1);
    assert.throws(function(){
      return board(2, 1)
    })
  })

  // // third test (sad) .. call too many queens
  // it('1.3 should throw an errow if I enter a string', function(){
  //   assert.throws(function(){
  //     return double('jon')
  //   })
  // })

})





// test that there's at least 2 queens on it (1 queen is not interesting since it is trivially safe)