function Phone(brand, price, color, quality, system) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  	this.quality = quality;
  	this.system = system;
}

	Phone.prototype.printInfo = function() {
		console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '. The quality is '  + this.quality + '/10. It uses ' + this.system + ' operating system.');
	}

	var iPhone6S = new Phone('Apple', 2250, 'silver', 8, 'iOS');
	iPhone6S.printInfo();

  	var galaxyS6 = new Phone('Samsung', 1500, 'black', 9, 'Android');
	galaxyS6.printInfo();

  	var lumia1520 = new Phone('Nokia', 500, 'white', 4, 'Windows Phone');
	lumia1520.printInfo();

	var onePlus = new Phone('OnePlus', 2600, 'black', 7, 'Android');
	onePlus.printInfo();