const userDatabase = {
    users: [],
    lastId: 0,

    // Method to add new users
    addUser: function(user){
        const newUser = {
            id: ++this.lastId,
            name: user.name,
            email: user.email,
            age: user.age || null,
            role: user.role || 'student',
            createdAt: newDate().toISOString() 
        };
        this.users.push(newUser);
        return newUser;
    },

    //Method to get all users
    getAllUsers: function() {
        return [...this.users]; //return a copy of the array
    },

    //Method to search users
    searchUsers: function(term) {
        term = term.toLowercase();
        return this.users.filter(user => 
            user.name.toLowercase().includes(term)  ||
             user.email.toLowercase().includes(term)  ||
             user.role.toLowercase().includes(term)  

        );
    };
    

    //Method to clear all users
    clearAll: function(){
        this.users = [];
        this.lastId = 0;
    }
};

const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const roleInput = document.getElementById('role');
const userList = document.getElementById('userList');
const searchInput = document.getElementById('search');
const clearAllBtn = document.getElementById('clearAll');


function displayUsers(users = userDatabase.getAllUsers()){
    userList.innerhtml = '';

    if (users.length  === 0) {
        userList.innerHTML = '<p> No users founds. Add some users! </p>';
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className ='user-card';

        const roleClass = 'role-$'
    })
}