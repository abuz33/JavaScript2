const form = document.querySelector('#form');
const bill = document.querySelector('#bill');
const option = document.querySelector('#select');
const people = document.querySelector('#num-customer');
const output = document.querySelector('.output')


function showResult(tipPerPerson) {
  if (people.value === '1') {
    output.innerHTML = `
      <div class='remove'>
        <h2>TIP AMOUNT</h2>
        <h3>$${tipPerPerson.toFixed(2)}</h3>
      </div>
      `;
  } else {
    output.innerHTML = `
      <div class='remove'>
        <h2>TIP AMOUNT</h2>
        <h3>$${tipPerPerson.toFixed(2)}</h3>
        <p><strong>each</strong></p>
      </div>
      `;
  }
  // Vanish in 10 seconds

  setTimeout( () => {
      document.querySelector('.remove').remove()
  }, 10000);
}





function showAlert(message) {
  const div = document.createElement('div');
  div.className = `alert`;
  div.appendChild(document.createTextNode(message));
  const inputFormDiv = document.querySelector('.input-form');

  const form = document.querySelector('#form');

  inputFormDiv.insertBefore(div, form);

  // Vanish in 3 seconds

  setTimeout( () => {
      document.querySelector('.alert').remove()
  }, 3000);
}



form.addEventListener('submit', (e) => {

  e.preventDefault();
  
  const tip = (bill.value * option.value) / 100;
  const tipPerPerson = tip / people.value;
  if (bill.value === '') {
    showAlert('Enter your bill amount');
  } else if (bill.value <= 0) {
    showAlert('Bill amount cannot be less than or equal to 0.');
  } else if (option.value === '0') {
    showAlert('Choose an option');
  } else if (people.value === '') {
    showAlert('Enter how many people will share the tip.');
  } else if (people.value <= 0) {
    showAlert('People value cannot be less than or equal to 0.');
  } else {
    showResult(tipPerPerson);
  }
});