function callApi() {
  // 実際にAPIを叩く処理
  fetch("https://jsonplaceholder.typicode.com/users");
    .then(function(res) {
      return res.json();
    })
    .then(function(users) {
      console.log(users);
    })
}

callApi();
