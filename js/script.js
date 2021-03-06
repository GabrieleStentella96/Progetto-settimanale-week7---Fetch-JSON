fetch('json/users.json').then(response => {
    return response.json();
 })
 .then(data => showCards(data));
 
 function showCards(users) {
     let card = document.querySelector('#card');
     users.forEach(element => {
        let userCard = document.createElement('div');
        card.appendChild(userCard);

        let userId = document.createElement('h2');
        userId.innerHTML = `${element.firstName} ${element.lastName}`;

        let userImg = document.createElement('img');
        userImg.src = `${element.profileURL}`;

        let userNickname = document.createElement('p');
        userNickname.innerHTML = `${element.username}`;

        let userGender = document.createElement('p');
        userGender.innerHTML = `${element.gender}`;

        let userSubj = document.createElement('p');
        userSubj.innerHTML = `${element.subjet}`;

        let userEmail = document.createElement('p');
        userEmail.innerHTML = `Email: <span>${element.email}</span>`;

        userCard.appendChild(userId);
        userCard.appendChild(userImg);
        userCard.appendChild(userNickname);
        userCard.appendChild(userGender);
        userCard.appendChild(userSubj);
        userCard.appendChild(userEmail);

        
     });
 };



 ScrollReveal ({
    reset: true,
    distance: '60px',
    duration: 2500,

});

ScrollReveal().reveal('h1', { delay: 300, origin: 'top' });
ScrollReveal().reveal('div', { delay: 1200, origin: 'bottom', interval: 1200});

