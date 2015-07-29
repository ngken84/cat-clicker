
var initialCats = [
	{
		clickCount : 0,
		name : 'Tabby',
		imgSrc : 'img/1.jpg',
		nicknames : ['kitty', 'lady', 'pussy']
	},
	{
		clickCount : 0,
		name : 'Tiger',
		imgSrc : 'img/2.jpg',
		nicknames : ['tiger lily']
	},
	{
		clickCount : 0,
		name : 'Scaredy',
		imgSrc : 'img/2.jpg',
		nicknames : ['scare crow']
	}

]


var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc)
	this.nicknames = ko.observableArray(data.nicknames);
}

var ViewModel = function() {
	var self = this;

	self.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	})

	self.currentCat = ko.observable(self.catList()[0]);
	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());