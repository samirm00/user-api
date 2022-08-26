// IMPORT 
import getUserHandler from "../handlers/getUser.js"

// DOM ELEMENT 
const userButton  = document.getElementById("get-user");
const userIdInput = document.getElementById("userId");

userButton.addEventListener("click", function(e)
{
    e.preventDefault();

    const userId = userIdInput.value;
    getUserHandler(userId);
});
