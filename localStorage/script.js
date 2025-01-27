console.log('tjenis');

localStorage.setItem('user', 'Jesper');
localStorage.setItem('user1', 'Lisa');
localStorage.setItem('user2', 'Olle');

let user = localStorage.getItem('user');
console.log(user);

localStorage.removeItem('user1');

// localStorage.clear();

let key = localStorage.key(0);
console.log(key);
