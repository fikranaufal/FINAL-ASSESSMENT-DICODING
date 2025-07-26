import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test("Should be sum corretly", () => {
    // arrange

    const numA = 1;
    const numB = 1;

    // action 
    
    const actualValue = sum(numA,numB);

    // assert

    const expectedValue = 2;
    assert.equal(actualValue,expectedValue);
});