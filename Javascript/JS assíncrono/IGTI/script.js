window.addEventListener('load', () => {
    const user = fetchExample().then(response => {
         renderAvatar(response);

    });

});


async function fetchExample(){
    let newUser = await fetch('https://api.github.com/users/guiRodrigues'); 
    newUser = await newUser.json();
    console.log(newUser);
    
    return newUser;
}


function renderAvatar(response){
    const divAvatar = document.querySelector('img.userAvatar');
    divAvatar.setAttribute('src', `${response.avatar_url}`)
}