(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyListController', ToBuyListController)
.controller('BoughtListController', BoughtListController)
.service('ShoppingListService', ShoppingListService);

ToBuyListController.$inject = ['ShoppingListService'];
function ToBuyListController(ShoppingListService) {
	var list = this;

	list.toBuyItems = ShoppingListService.getToBuyItems();

	list.buyItem = function (itemIndex) {
		ShoppingListService.buyItem(itemIndex);
	};
}

BoughtListController.$inject = ['ShoppingListService'];
function BoughtListController(ShoppingListService) {
	var list = this;

	list.boughtItems = ShoppingListService.getBoughtItems();
}

function ShoppingListService() {
	var service = this;

	var toBuyItems = [
		{ name: 'Cookies', quantity: 10 },
		{ name: 'Chocolate Bar', quantity: 3 },
		{ name: 'Snickers Bar', quantity: 7 },
		{ name: 'Pepsi Bottle', quantity: 3 },
		{ name: 'Cola Bottle', quantity: 3 },
		{ name: 'Skittles Pack', quantity: 3 }
	];

	var boughtItems = [];

	service.buyItem = function (itemIndex) {
		boughtItems.push(toBuyItems[itemIndex]);
		toBuyItems.splice(itemIndex, 1);
	};

	service.getToBuyItems = function () {
		return toBuyItems;
	};

	service.getBoughtItems = function () {
		return boughtItems;
	};
}

})();
