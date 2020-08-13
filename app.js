async function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  console.log(comments);
}

callApi();
