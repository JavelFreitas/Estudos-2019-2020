let allUsers = [];

window.addEventListener('load', () => {
    fetchUsers().then(res => {
        allUsers = res.results;
        console.log(allUsers);
        renderAvatar(allUsers[0]);
    });

});


async function fetchUsers(){
    let newUser = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'); 
    newUser = await newUser.json();
    
    return newUser;
}


function renderAvatar(user){
    let userPicture = user.picture.medium;
    console.log(userPicture);
    
    const divAvatar = document.querySelector('img.userAvatar');
    divAvatar.setAttribute('src', `${user.picture.medium}`)
}