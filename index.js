// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com"
  })
})

.then(res => res.json())
.then(res => {


    let newNode = document.createElement('div');
    newNode.innerHTML = res.id;
    document.querySelector("body").appendChild(newNode);


})

.catch(error => {
  let newNode = document.createElement('div');
  newNode.innerHTML = error.message;
  document.querySelector("body").appendChild(newNode);

})


}