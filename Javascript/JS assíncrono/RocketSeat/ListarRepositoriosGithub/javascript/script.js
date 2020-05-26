window.addEventListener('load', start);


function start() {
    const inputUser = document.querySelector('input#github_name');
    inputUser.addEventListener('keyup', handleInput);
    inputUser.focus();

}

function handleInput(event) {
    if (event.key === 'Enter') {
        setTimeout(() => {handleUserRequisition(event.srcElement.value)},100);
        document.querySelector('h1.principal-title').innerText = 'Carregando...';
    }
}

async function handleUserRequisition(userId) {
    await getUserGithub(`${userId}`)
        .then(userInfo => {
            console.log(userInfo);

            getUsersRepositories(userInfo.userRepositoriesURL).then(userRepositories => {

                renderUserName(userInfo.userName, userInfo.userURL);
                console.log(userRepositories);

                renderUserRepositories(userRepositories);
            });

            
        })
        .catch(
            (_) => {
                let title = document.querySelector('h1.principal-title');
                let repositoryList = document.querySelector('div.repositories');

                title.innerText = "User could not be found";
                title.setAttribute('class', 'principal-title red-text');
                
                repositoryList.innerHTML = '';
            });

}


async function getUserGithub(textInput) {
    return axios.get(`https://api.github.com/users/${textInput}`).then(res => {
        const { data } = res;
        return {
            userName: data.login,
            userURL: data.html_url,
            userRepositoriesURL: data.repos_url
        };
    });
}

async function getUsersRepositories(repos_url) {
    return axios.get(`${repos_url}`).then(res => {

        return res.data.map(repo => {
            const { name, svn_url } = repo

            return {
                repositoryName: name,
                repositoryURL: svn_url
            }
        });

    })
}

function renderUserName(userName, userURL) {
    let pageTitle = document.querySelector('h1.principal-title');
    pageTitle.setAttribute('class', 'teal-text text-accent-2 principal-title')
    pageTitle.innerText = `${userName}`;

    let titleLink = document.querySelector('a.title-link');
    titleLink.setAttribute('href', `${userURL}`);

}

function renderUserRepositories(userRepositories) {
    let divRepositories = document.querySelector('div.repositories');
    
    divRepositories.innerHTML = '';

    userRepositories.forEach(userRepository => {
        let individualDiv = document.createElement('div');
        individualDiv.setAttribute('class', 'col s12 m7 l3 light-blue darken-4 hoverable center repository');

        let repository = document.createElement('a');
        repository.setAttribute('href', `${userRepository.repositoryURL}`);

        let repositoryName = document.createElement('h5');
        repositoryName.setAttribute('class', 'teal-text text-accent-2');
        repositoryName.innerText = `${userRepository.repositoryName}`;

        repository.appendChild(repositoryName);

        individualDiv.appendChild(repository);

        divRepositories.appendChild(individualDiv);
    });

}