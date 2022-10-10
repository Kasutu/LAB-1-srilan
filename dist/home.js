const users = [
  `<li class="list-group-item">Jollibee</li>`,
  `<li class="list-group-item">gem</li>`,
  `<li class="list-group-item">Diadem Grace Arroz</li>`,
];

let listContainer = document.getElementById('list-container');
let addUserFormContainer = document.getElementById('add-user-form-container');
let userList = document.getElementById('user-list');

users.forEach((value) => {
  userList.insertAdjacentHTML('beforeend', value);
});

addUserFormContainer.style.visibility = 'hidden';

document.getElementById('cancel-btn').addEventListener('click', showUserList);
document.getElementById('save-btn').addEventListener('click', showUserList);
document.getElementById('save-btn').addEventListener('click', loadUsers);
document
  .getElementById('add-btn-modal')
  .addEventListener('click', hideUserList);

function showUserList() {
  addUserFormContainer.style.visibility = 'hidden';
  listContainer.style.visibility = 'visible';
}

function hideUserList() {
  listContainer.style.visibility = 'hidden';
  addUserFormContainer.style.visibility = 'visible';
}

function loadUsers() {
  let first = document.getElementById('first-name').value;
  let last = document.getElementById('last-name').value;

  let item = /*HTML*/ `<li class="list-group-item">${first} ${last}</li>`;
  userList.insertAdjacentHTML('beforeend', item);
}
