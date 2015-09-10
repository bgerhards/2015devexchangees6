import Item from '../es6Converted/item';
var items = [];

describe("Testing Output", function () {

	it("Canary", function(){})

	it("Creating new classes... Just a quick test! ", function () {
		// var items = [];
		items.push(new Item(1, 'Potato', 'Idaho', '.60', true));
		items.push(new Item(2, 'Tomato', 'Iowa', '.75', true));

		expect(items[0].id).toBe(1);
		expect(items[0].name).toBe('Potato');
		expect(items[0].brand).toBe('Idaho');
		expect(items[0].cost).toBe('.60');
		expect(items[0].taxExempt).toBe(true);


		// expect(items[1].itemName).toBe('Tomato');
		// expect(items[1].itemNumber).toBe(2);
	})

	it("Creating new classes... In an array! ", function () {
		// var items = [];
		items.push(new Item(1,'Potato'));
		items.push(new Item(2,'Tomato'));
		expect(items[0].name).toBe('Potato');
		expect(items[0].id).toBe(1);
		expect(items[1].name).toBe('Tomato');
		expect(items[1].id).toBe(2);
	})
})