console.log('Selamat datang!');
 
setTimeout(() => {
  console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)
 
console.log('Ada yang bisa dibantu?');

function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
   
      callback(users);
    }, 3000);
  }
   
  function usersCallback(users) {
    console.log(users);
  }
   
  getUsers(usersCallback);