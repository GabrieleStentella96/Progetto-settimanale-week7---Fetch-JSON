fetch('json/users.json').then(response => {
    return response.json();
 })
 
 .then(usersData => showCards(usersData));
 
 function showCards(users) {
     let container = document.querySelector('#card');
     users.forEach(element => {
         let card = document.createElement('div');
         card.innerHTML =    `
                             <h2>${element.firstName} ${element.lastName}</h2>
                             <img src="${element.profileURL}" alt="">
                             <li>Gender: ${element.gender}</li>
                             <li>Username: ${element.username}</li>
                             <li>Email: ${element.email}</li>
                             `
         container.appendChild(card);
     });
 };