let progressbarEl = document.getElementById('js-progressbar');
let prevBtnEl = document.getElementById('js-prevBtn');
let nextBtnEl = document.getElementById('js-nextBtn');
let tabEl = document.querySelectorAll('.js-tab');
let infEl = document.querySelector('#js-information');
let firstNameEl = document.querySelector('#js-first-name');
let lastNameEl = document.querySelector('#js-last-name');
let emailEl = document.querySelector('#js-email');
let passEl = document.querySelector('#js-pass');
let pass1El = document.querySelector('#js-pass1');
let step = 0;

showButton(step);
var smsCode = 0;

/**
* click on 'Next' button
* Step up to 1
* Show tab
* add the "active" class to the step present
* delete the "active" class & add the "visited" class to the step before
*/
function progressbarNext() {
  let stepEl = document.querySelectorAll('.js-step');
  step = step + 1;
  for (var i = 0; i < tabEl.length; i++) {
    if (i === step) {
      tabEl[i - 1].classList.add('d-none');
      tabEl[i].classList.remove('d-none');
    }
  }
  stepEl[step - 1].classList.remove("active");
  stepEl[step - 1].classList.add('visited');
  stepEl[step].classList.add('active');

  showButton(step);
};

/**
* click on 'Back' button
* Step down 1
* Show tab
* add the "active" class to the step present
* delete the "active" class & add the "visited" class to the step after
* if (step = 3) then come back step 1 to get the code Sms back
*/
function progressbarBack() {
  let stepEl = document.querySelectorAll(".js-step");
  if (step === 3) {
    tabEl[step].classList.add('d-none');
    step = step - 2;
    stepEl[step + 2].classList.remove('active');
    stepEl[step + 1].classList.remove('visited');
  } else {
    step = step - 1;
  }
  for (var i = 0; i < tabEl.length; i++) {
    if (i === step) {
      tabEl[i + 1].classList.add('d-none');
      tabEl[i].classList.remove('d-none');
      break;
    }
  }
  stepEl[step + 1].classList.remove('active');
  stepEl[step].classList.remove('visited');
  stepEl[step].classList.add('active');
  showButton(step);
};

/**
* @method showButton
* @param {number} step
* Consider the display case and not display
* Execute the click function
* This function will display the specified tab of the form
* Event the Back/Next buttons
*/
function showButton(n) {
  if (n == 0 || n == 4) {
    prevBtnEl.disabled = true;
  } else {
    prevBtnEl.disabled = false;
  }
  if (step === 4) {
    nextBtnEl.disabled = true;
  } else {
    nextBtnEl.disabled = false;
  }
  if (n === (tabEl.length - 2)) {
    nextBtnEl.innerHTML = "Submit";
  } else {
    nextBtnEl.innerHTML = "Next";
  }
  nextBtnEl.addEventListener('click', checkEvent);
  prevBtnEl.addEventListener('click', progressbarBack);
}

/**
* @method checkEvent
* Perform when click 'Next' button
* Check conditions step present
*/
function checkEvent() {
  switch(step) {
    case 0:
      if (!validateForm()) {
        validateForm();
      } else {
        progressbarNext();
        checkPhone();
      }
      break;
    case 1:
      progressbarNext();
      // random number has 4 digits
      smsCode = getRandom(1000, 10000);
      alert(smsCode);
      focusSms();
      break;
    case 2:
      checkSms();
      showInformation();
      break;
    default:
      progressbarNext();
  }
}

/**
* @method validateForm
* All value input not null
* Check email format and Password length bigger 4
* return {boolean} checkValue 
*/
function validateForm() {
  let valueInputEL = tabEl[step].querySelectorAll('.form-control');
  let errorEL = tabEl[step].querySelector('.error');
  let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  errorEL.innerHTML = '';
  let checkValue = true;
  for (var i = 0; i < valueInputEL.length; i++) {
    valueInputEL[i].value = valueInputEL[i].value.trim();
    if (valueInputEL[i].value === '') {
      valueInputEL[i].classList.add("invalid");
      checkValue = false;
    }
    else {
      valueInputEL[i].classList.remove("invalid");
      checkValue = true;
    }
  }
  if(!firstNameEl.value) {
    pEl = document.createElement('p');
    pEl.innerHTML = "Please choose a Firstname.";
    errorEL.appendChild(pEl);
    firstNameEl.classList.add('invalid');
    checkValue = false;
  }
  if(!lastNameEl.value) {
    pEl = document.createElement('p');
    pEl.innerHTML = "Please choose a Lastname.";
    errorEL.appendChild(pEl);
    lastNameEl.classList.add('invalid');
    checkValue = false;
  }
  if(!emailEl.value.match(mailFormat)) {
    pEl = document.createElement('p');
    pEl.innerHTML = "Please enter a valid email address.";
    errorEL.appendChild(pEl);
    emailEl.classList.add('invalid');
    checkValue = false;
  }
  if(!passEl.value) {
    pEl = document.createElement('p');
    pEl.innerHTML = "Please choose a pass.";
    errorEL.appendChild(pEl);
    passEl.classList.add('invalid');
    checkValue = false;
  } else if (passEl.value.length < 4) {
    pEl = document.createElement('p');
    pEl.innerHTML = "Password length bigger 4";
    errorEL.appendChild(pEl);
    passEl.classList.add('invalid');
    checkValue = false;
  } else if (pass1El.value !== passEl.value) {
    pEl = document.createElement('p');
    pEl.innerHTML = "Error confirm password!";
    errorEL.appendChild(pEl);
    passEl.classList.add('invalid');
    pass1El.classList.add('invalid');
    checkValue = false;
  }

  return checkValue;
}

/* 
* add EventListener Input 
* when the length of a phone number different 10 then disabled button Next
* return {string} valuePhone 
*/
function checkPhone() {
  let phoneEl = document.querySelectorAll('.js-check-number');
  let phoneFormat = /((09|03|07|08|05|01)+([0-9]{8}))/;
  eventNext = 0;
  for (let i = 0; i < phoneEl.length; i++) {
    eventNext += phoneEl[i].value.length;
    if (eventNext === 10) {
      nextBtnEl.disabled = false;
    } else {
      nextBtnEl.disabled = true;
    }
    phoneEl[i].addEventListener('input', function(e) {
      valuePhone = '';
      item = 0;
      for (let i = 0; i < phoneEl.length; i++) {
        valuePhone += phoneEl[i].value;
        item += phoneEl[i].value.length;
      }
      if (item === 10) {
        if (valuePhone.match(phoneFormat)) {
          nextBtnEl.disabled = false;
          return valuePhone;
        } else {
          alert("Bạn nhập sai số điện thoại!");
        }
      } else {
        nextBtnEl.disabled = true;
      }
    });
  }
}

// random numbers in the range from min to (max-1)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/* 
* @method focusSms
* add Focus event to the Input
*/
function focusSms() {
  let smsEl = document.querySelectorAll('.js-sms-code');
  for (var i = 0; i < smsEl.length; i++) {
    smsEl[i].addEventListener('keyup', function() {
      var index = -1;
      for (var j = 0; j < smsEl.length; j++) {
        if (smsEl[j] === this) {
          index = j;
          break;
        }
      }
      smsEl[(index + 1)].focus();
    });
    smsEl[i].value = '';
  }
}

/* 
* @method checkSms
* value comparison Sms Code with 4 inputs value
*/
function checkSms() {
  let smsEl = document.querySelectorAll('.js-sms-code');
  var temp = '';
  var checkSms = true;
  for (var i = 0; i < smsEl.length; i++) {
    temp += smsEl[i].value;
  }
  if (Number(temp) !== smsCode) {
    checkSms = false;
  }
  if (checkSms) {
    progressbarNext();
  } else {
    alert('You entered the wrong Sms Code!');
  }
}

function showInformation() {
  infEl.innerHTML = '<h4 class="title-inf">Username:</h4><p class="content-inf">' +
                    lastNameEl.value + ' ' + firstNameEl.value + '</p>' +
                    '<h4 class="title-inf">Email:</h4><p class="content-inf">' +
                    emailEl.value + '</p>' +
                    '<h4 class="title-inf">Phone Number:</h4><p class="content-inf">' +
                    valuePhone + '</p>';
}
