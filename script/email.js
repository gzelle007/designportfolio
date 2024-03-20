function ValidateEmail() {

  const emailAddress = document.querySelector('#emailAddress');

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailAddress.value.match(validRegex)) {

    alert("Thank you. You feedback has been receieved!");
    emailAddress.focus();

  } else {
    alert("Invalid email address!");
    emailAddress.focus();
  }

}

export {ValidateEmail};