function callApi() {
  // 実際にAPIを叩く処理
  //APIから取ってきたデータを入れる定数を定義
  //どこから取ってくるか＝windowのfetchメソッドで、参照先はAPIの該当URL
  const res = window.fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res);
}

callApi();
