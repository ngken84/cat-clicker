
var Cat = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/1.jpg')
	this.nicknames = ko.observableArray(['kitty', 'lady', 'pussy']);
}


var ViewModel = function() {
	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());