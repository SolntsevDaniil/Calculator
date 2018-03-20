/* ---------- Start of the program ---------- */


// Declaration of the strict mode
'use strict';

// Page load ending event
window.addEventListener('DOMContentLoaded', function() {

	// Object with properties and method
	var inputs = {

		// All buttons
		buttons: document.getElementsByClassName('input'),

		// Print field
		total: document.getElementsByClassName('total')[0],

		// Result showing method
		printResult: function() {

			// Enumeration of all buttons for applying a click event
			for (var i = 0; i < this.buttons.length; i++) {

				// Click event listener
				this.buttons[i].addEventListener('click', function() {

					// Conditionals
					switch(this.value) {

						// If the button '=' is pressed
						case '=': inputs.total.value = eval(inputs.total.value); break;

						// If the button 'c' is pressed
						case 'c': inputs.total.value = ''; break;

						// If the button 'del' is pressed
						case 'del': inputs.total.value = inputs.total.value.substring(0, inputs.total.value.length - 1); break;

						// If numbers are pressed
						default: inputs.total.value = inputs.total.value + this.innerHTML; break;
					};

				// Adding result to localStorage so as to not to lose user data
				localStorage.setItem('Result', inputs.total.value);
				
				});
			}
		}
	};

	// Result showing method call
	inputs.printResult();

	// If user data in localStorage, get it
	inputs.total.value = localStorage.getItem('Result');
});


/* ---------- End of the program ---------- */