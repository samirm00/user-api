
// IMPORT 
import getUsersHandler from "../handlers/getUsers.js";

// DOM ELEMENTS 
var usersButton = document.getElementById("get-users");

usersButton.addEventListener("click", function(e)
{
    e.preventDefault();
    getUsersHandler();
});