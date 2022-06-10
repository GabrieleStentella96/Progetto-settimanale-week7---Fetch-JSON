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
                             <p>Gender: <span>${element.gender}</span></p>
                             <p>Username: <span>${element.username}</span></p>
                             <p>Email: <span>${element.email}</span></p>
                             `
         container.appendChild(card);
     });
 };