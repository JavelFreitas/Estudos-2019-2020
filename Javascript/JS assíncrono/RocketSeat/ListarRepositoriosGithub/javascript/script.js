window.addEventListener('load', start);


function start(){
    getUserGithub();

}



function getUserGithub(){
    axios.get('https://api.github.com/users/JavelFreitas').then(res => {
        console.log(res);
        console.log(res.data.repos_url);
    });
    
    
}