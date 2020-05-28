class User{
    constructor(userName, userEmail){
        this.userName = userName;
        this.userEmail = userEmail;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends User{
    constructor(userName, userEmail){
        super(userName, userEmail);
        this.admin = true;
    }
}

let user = new User('Joao', 'joao@joao.jo');
let admin = new Admin('Victor', 'victor@victor.vi');
console.log(user.isAdmin());
console.log(admin.isAdmin());