'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

	it('should return an inverted hash', () => {
		expect(Solution({ hello: 'world' })).toEqual({ world: 'hello' });
	});

	it('should return an inverted hash', () => {
		expect(Solution({ a: '1', b: '2', c: '3' })).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
	});

	it('should return an inverted hash', () => {
		expect(Solution({ hash: 'inverted' })).toEqual({ inverted: 'hash' });
	});

	it('should return an inverted hash', () => {
		expect(Solution({ Chiann: 'Desiree', Chandra: 'Rampersad', Emily: 'Phelan' })).toEqual({ Desiree: 'Chiann', Rampersad: 'Chandra', Phelan: 'Emily'});
	});

	it('should return an inverted hash', () => {
		expect(Solution({ tinder: 'Maeve' })).toEqual({ Maeve: 'tinder' });
	});
});