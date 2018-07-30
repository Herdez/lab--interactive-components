/* 02 - FORM VALIDATION :: YOUR CODE BELOW */

function formValidation() {
	var registrationForm = document.querySelector('#registration-form');
	registrationForm.addEventListener('submit', function(e) {
		e.preventDefault();
		var elementInput = e.target;
		var totalElements = elementInput.elements.length - 1;
		username = elementInput.elements.username;
		password = elementInput.elements.userpassword;
		confirmPassword = elementInput.elements.confirmpassword;
		taxNumber = elementInput.elements.taxid;
		account = elementInput.elements.account;
		terms = elementInput.elements.termsofservice;
		check = 0;
	    validation();
	    if (check === totalElements) {
			document.querySelector('.validation--entire-form').innerText = "Form completed";
		}	

	});
}


function validationUsername(input, nameOfClass) {
	var textConfirmation = document.querySelector("." + nameOfClass);
	if (input !== "") {
		textConfirmation.innerText = "success";
		check += 1;
		return check;
	} else {
		textConfirmation.innerText = "Username cannot be blank";
	}

}

function validationPassword(isConfirm, nameOfClass, input, confirmInput = "") {
	var textConfirmation = document.querySelector("." + nameOfClass);
	if (isConfirm === false) {
		if (input.length >= 8) {
			textConfirmation.innerText = "success";
			return check += 1;
		} else {
			textConfirmation.innerText = "Password must have a minimun of 8 characters";
		}
    } else {
    	if ( input === confirmInput && input.length >= 8) {
    		textConfirmation.innerText = "success";
    		return check += 1;
    	} else {
    		textConfirmation.innerText = "Passwords must match";
  
    	}
    }

}

function validationTaxIdNumber(input, nameOfClass){
	var textConfirmation = document.querySelector("." + nameOfClass);
	if (input !== ""){
		if (isNaN(input) === false && input.length === 10) {
			textConfirmation.innerText = "success";
			return check += 1;
		} else {
			textConfirmation.innerText = "Tax ID number is only numbers and is 10 digits";
		}
	} else {
		textConfirmation.innerText = "Must provide Tax ID Number";
	}
}

function validationAccount(input, nameOfClass) {
	var textConfirmation = document.querySelector("." + nameOfClass);
	if (input !== "") {
		textConfirmation.innerText = "success";
		return check += 1;
	} else {
		textConfirmation.innerText = "Must select account type";
	}

}

function validationTerms(input, nameOfClass) {
	var textConfirmation = document.querySelector("." + nameOfClass);
	if (input === true) {
		textConfirmation.innerText = "success";
		return check += 1;
	} else {
		textConfirmation.innerText = "Must approve terms of service";
	}

}



function validation() {
    if (username.name === "username") {
		validationUsername(username.value, "validation--username");
	}
	if (password.name === "userpassword") {
		validationPassword(false, "validation--user-password", password.value);
	}
	if (confirmPassword.name === "confirmpassword") {
		validationPassword(true, "validation--confirm-password", password.value, confirmPassword.value);
	}
    if (taxNumber.name === "taxid") {
		validationTaxIdNumber(taxNumber.value, "validation--tax-id");
	}
	if (account.name === "account") {
		validationAccount(account.value, "validation--account");
	}
	if (terms.name === "termsofservice") {
		validationTerms(terms.checked, "validation--terms-of-service");
	}
}


formValidation();