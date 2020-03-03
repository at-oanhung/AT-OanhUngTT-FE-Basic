let progressbarEl = document.getElementById('js-progressbar');
let prevBtnEl = document.getElementById('js-prevBtn');
let nextBtnEl = document.getElementById('js-nextBtn');
let tabEl = document.querySelectorAll('.tab');
let infEl = document.querySelector('#js-information');

let firstNameEl = document.querySelector('#js-first-name');
let lastNameEl = document.querySelector('#js-last-name');
let emailEl = document.querySelector('#js-email');
let passEl = document.querySelector('#js-pass');
let pass1El = document.querySelector('#js-pass1');
let step = 0;

showTab(step);
var smsCode = 0;

function progressbarNext() {
  var stepEl = document.getElementsByClassName('step');

  step = step + 1;
  for (var i = 0; i < tabEl.length; i++) {
    if (i === step) {
      tabEl[i - 1].classList.add('d-none');
      tabEl[i].classList.remove('d-none');
    }
  }
  console.log(step);
  // for (var i = 0; i < step; i++) {
  //   stepEl[i].classList.remove("active");
  //   stepEl[i].classList.add('visited');
  // }
  //add the "active" class to the step present
  // delete the "active" class & add the "visited" class to the step before
  stepEl[step - 1].classList.remove("active");
  stepEl[step - 1].classList.add('visited');
  stepEl[step].classList.add('active');

  showTab(step);
};

function progressbarBack() {
  var stepEl = document.getElementsByClassName("step");
  console.log(step);
  if (step === 3) {
    tabEl[step].classList.add('d-none');
    step = step - 2;
    console.log('step ' +step);
    stepEl[step + 2].classList.remove('active');
    stepEl[step + 1].classList.remove('visited');
  } else {
    step = step - 1;
    console.log(step);
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
  showTab(step);
};

function showTab(n) {
  // This function will display the specified tab of the form
  var tabEl = document.getElementsByClassName("tab");
  //fix the Previous/Next buttons
  if (n == 0) {
    prevBtnEl.disabled = true;
    tabEl[0].classList.remove('d-none');
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
  if (step === 2) {
    smsCode = getRandom(1000, 10000);
  }
  nextBtnEl.addEventListener('click', checkEvent);
  prevBtnEl.addEventListener('click', progressbarBack);
}

function checkEvent() {
  if (step === 0) {
    if (!validateForm()) {
      validateForm();
    } else {
      progressbarNext();
      checkPhone();
    }
  }
  else if (step === 1) {
    progressbarNext();
    alert(smsCode);
    focusSms();
  }
  else if (step === 2) {
    checkSms();
    showInformation();
  }
  else if (step === 3) {
    progressbarNext();
  }
}

function validateForm() {
  let valueInputEL = tabEl[step].getElementsByClassName('form-control');
  let errorEL = tabEl[step].querySelector('.error');

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
  let nameFormat= /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g;
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
  } else if (!lastNameEl.value.match(nameFormat)) {
    pEl = document.createElement('p');
    pEl.innerHTML = "Please provide a valid Lastname.";
    errorEL.appendChild(pEl);
    lastNameEl.classList.add('invalid');
    checkValue = false;
  }
  var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

/* add Event Input 
*  when the length of a phone number different 10 then disabled button Next
*/
function checkPhone() {
  let phoneEl = document.querySelectorAll('.js-check-number');
  let phoneFormat = /((09|03|07|08|05)+([0-9]{8}))/;
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

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function focusSms() {
  let smsEl = document.querySelectorAll('.js-sms-code');
  for (var i = 0; i < smsEl.length; i++) {
    smsEl[i].addEventListener('keyup', function() {
      var index = -1;
      for (var j = 0; j < smsEl.length - 1; j++) {
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
    alert('Vui lòng nhập lại Sms Code!');
  }
}

function showInformation() {
  infEl.innerHTML = '<h4>Username:</h4><p>' +
                    lastNameEl.value + ' ' + firstNameEl.value + '</p>' +
                    '<h4>Email:</h4><p>' +
                    emailEl.value + '</p>' +
                    '<h4>Number Phone:</h4><p>' +
                    valuePhone + '</p>';
}
