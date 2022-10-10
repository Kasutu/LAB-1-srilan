document.getElementById('login-btn').addEventListener('click', submit);

function submit() {
  try {
    evaluate();
  } catch (e) {
    alert(e);
  }
}

function evaluate() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (
    username === '' ||
    username === ' ' ||
    password === ' ' ||
    password === ''
  ) {
    throw new Error('Username or Password is empty');
  }

  if (password.length < 3) {
    throw new Error('Password is weak');
  }

  if (username === 'admin' && password === 'root') {
    location.href = './home.html';
  } else {
    throw new Error('Wrong Username or Password');
  }
}
