const users = [
  { first: 'jollibee', last: '' },
  { first: 'gem', last: '' },
  { first: 'Diadem Grace', last: 'Arroz' },
];

function makeListItem(first, last) {
  return `<li class="list-group-item text-white" style="background-color: transparent; border-color: transparent;">${first} ${last}</li>`;
}

let listContainer = document.getElementById('list-container');
let addUserFormContainer = document.getElementById('add-user-form-container');
let userList = document.getElementById('user-list');

document.getElementById('cancel-btn').addEventListener('click', showUserList);
document.getElementById('save-btn').addEventListener('click', showUserList);
document.getElementById('save-btn').addEventListener('click', loadUsers);
document
  .getElementById('add-btn-modal')
  .addEventListener('click', hideUserList);

users.forEach(({ first, last }) => {
  userList.insertAdjacentHTML('beforeend', makeListItem(first, last));
});

addUserFormContainer.style.visibility = 'hidden';

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

  if (first === '' || last === '') return;

  userList.insertAdjacentHTML('beforeend', makeListItem(first, last));
}
