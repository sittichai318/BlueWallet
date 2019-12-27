/* global it */
const bitcoin = require('bitcoinjs-lib');
const assert = require('assert');

it('can', () => {
  const pubkeys = [
    '02228aef58b832a21d2feb48137cc77087c98477477c926ca15cd15fca3a5edc02', // server
    '038f2d671655aa4dbab64186089c436a180071e7227a5bbe4e741c8837e8150be8', // seller
    '038479aee978f769132284bef152f0d46659870339b2f2e5e10686d84adfc00c2a', // buyer
  ].map(hex => Buffer.from(hex, 'hex'));
  const { address } = bitcoin.payments.p2sh({
    redeem: bitcoin.payments.p2wsh({
      redeem: bitcoin.payments.p2ms({ m: 2, pubkeys }),
    }),
  });
  assert.strictEqual(address, '32bUZ1i4kAh7H3jb5JLj2FSv42LPMNPZeZ');
});
