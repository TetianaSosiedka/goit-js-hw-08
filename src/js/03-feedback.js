import throttle from 'lodash.throttle';
//---------------------------------------------------------------
const refs = {
  form: document.querySelector('.feedback-form'),
  formMail: document.querySelector('.feedback-form input'),
  formMessage: document.querySelector('.feedback-form textarea'),
};
let formDates = {
  mail: '',
  message: '',
};
//---------------------------------------------------------------
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

fillForms(); //fill out the form Local Storage

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log('You entered:', formDates);
}
function onFormInput(event) {
  if (event.target.nodeName === 'INPUT') {
    formDates.mail = event.target.value;
  }
  if (event.target.nodeName === 'TEXTAREA') {
    formDates.message = event.target.value;
  }
  addFormDatesInLocalStorade();
}
function addFormDatesInLocalStorade() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formDates));
}

function fillForms() {
  const saveDates = localStorage.getItem('feedback-form-state');
  if (saveDates) {
    const { mail, message } = JSON.parse(saveDates);
    if (mail) {
      refs.form.querySelector('input[name="email"]').value = mail;
      formDates.mail = mail;
    }
    if (message) {
      refs.form.querySelector('textarea').value = message;
      formDates.message = message;
    }
  }
}
