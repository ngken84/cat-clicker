
var Cat = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/1.jpg')
	this.nicknames = ko.observableArray(['kitty', 'lady', 'pussy']);
}

var ViewModel = function() {
	var self = this;
	self.currentCat = ko.observable( new Cat() );
	self.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());