var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person'

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes £0 in taxes.")
	}
}

var peter = new Person("Peter Weightman", "Blue");
var leia = new Adult("Leia Turner", "Purple");

peter.greet();
leia.greet();
leia.payTaxes();