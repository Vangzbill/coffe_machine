function getUser(id, callback) {
    setTimeout(() => {
      if (!id) {
        callback(new Error("User ID is required"), null);
      }
  
      callback(null, { id, name: 'John Doe', location: "Jakarta" });
    }, 1000);
  }
  
  function getWeather(location, callback) {
    setTimeout(() => {
      if (!location) {
        callback(new Error("Location is required"), null);
      }
  
      callback(null, { weather: "Sunny", temperature: 30 });
    }, 1000);
  }
  
  export { getUser, getWeather };

  function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 100) {
          reject(new Error('Not enough money to withdraw'))
        }
  
        resolve(amount)
      }, 1000);
    });
  }
  
  function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (money < 10) {
          reject(new Error('not enough money to buy ticket'))
        }
  
        resolve('ticket-1')
      }, 1000);
    });
  }
  
  function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!ticket) {
          reject(new Error('no ticket'))
        }
  
        resolve('enjoy the movie')
      }, 1000);
    });
  }
  
  export { withDrawMoney, buyCinemaTicket, goInsideCinema };
      