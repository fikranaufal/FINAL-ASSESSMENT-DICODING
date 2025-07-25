import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test ('Harus sum dengan benar', () => {
    // arrange
    const operandA = 1;
    const operandB = 1;

    // action
    const actualValue = sum(operandA,operandB);

    // assert 
    const expectedValue = 2;
    assert.equal(actualValue,expectedValue);
});