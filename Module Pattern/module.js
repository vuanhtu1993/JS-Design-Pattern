const Bike = (function() {
	let branch = "DOC_LAP";
	let getBranch = function() {
		return branch;
	};
	let setBranch = function(newBranch) {
		branch = newBranch;
	};
	return {
		getBranch: getBranch,
		setBranch: setBranch
	}
})();

console.log(Bike.getBranch());
Bike.setBranch("THONG_NHAT");
console.log(Bike.getBranch());

const Apple = function () {

};

let Exposer = (function() {
	let privateVariable = 10;

	let privateMethod = function() {
		console.log('Inside a private method increment private variable');
		privateVariable++;
	};

	let showPrivateVar = function() {
		console.log("privateVariable:", privateVariable);
	};

	let incrementVar = function() {
		privateMethod();
	};
  return {
		showPrivateVar: showPrivateVar,
		incrementVar: incrementVar
	}
})();

Exposer.showPrivateVar();
Exposer.incrementVar();
Exposer.showPrivateVar();