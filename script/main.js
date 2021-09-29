import { database } from "../fake-database/database.js";


database.Users.signIn(prompt("Enter user name"),prompt("Enter password"))
    .then(response => console.log(JSON.parse(response)))
    .catch(error => console.log(error));

database.Users.getUsers()
    .then(response => console.table(JSON.parse(response)))
    .catch(error => console.log(error));