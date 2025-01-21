async function getusers(){
const response = await fetch (`https://jsonplaceholder.typicode.com/users`);
const users =  await response.json();
const reslut = users.map (function(users){return `<div class="user">
  <h2>ID: ${users.id} - ${users.name}</h2>
  <p>Username: ${users.username}</p>
  <p>Email: ${users.email}</p>
  <p>Address: ${users.address.street}, ${users.address.suite}, ${users.address.city}, ${users.address.zipcode}</p>
  <p>Phone: ${users.phone}</p>
  <p>Website: <a href="${users.website}" target="_blank">${users.website}</a></p>
  <p>Company: ${users.company.name}, ${users.company.catchPhrase}</p>
  <p>Street: ${users.address.street}</p>
  <p>Suite: ${users.address.suite}</p>
  <p>City: ${users.address.city}</p>
  <p>Zipcode: ${users.address.zipcode}</p>
  <p>Latitude: ${users.address.geo.lat}</p>
  <p>Longitude: ${users.address.geo.lng}</p>
</div>`}).join ('');
document.querySelector(" .users").innerHTML=reslut;

}

getusers();