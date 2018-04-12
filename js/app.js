class Calculator {
	constructor() {};

	clear(output) { output.value = ''; };
	// Delete last character
	delete(output) { output.value = output.value.substring(0, output.value.length - 1); };
	equal(output) { output.value = eval(output.value); };
};

class UI {
	constructor() {};

	render() {
		const buttons = document.querySelectorAll('.input'),
			  output = document.querySelector('.total'),
			  calculator = new Calculator();

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function() {
				switch(this.value) {
					case '=': calculator.equal(output); break;
					case 'c': calculator.clear(output); break;
					case 'del': calculator.delete(output); break;
					default: output.value += this.innerHTML; break;
				};
			});
		};
		
	};
};

const ui = new UI();
ui.render();