
// IMPORT 
import userComponent    from "../components/user.js";
import noUsersComponent from "../components/noUsers.js";
import getUsers         from "../../API/getUsers.js";

// DOM ELEMENTS
var usersMainDom = document.getElementById("users");
const error      = document.getElementById("error");

function getUsersHandler ()
{
   getUsers()  // RETURN PROMISE 
   .then(users =>
   { 
      usersMainDom.innerHTML = "";  
      // Make sure there is no error 
      if(error.innerText !== "") 
      {
         error.innerText = ""
         error.classList.remove("show-error");

      }
      if( users)
      {
          
         users.forEach(user => 
         {
            const UserInfo = userComponent(user);         
            usersMainDom.append(UserInfo);  
   
         });
      }
      else
      {
         usersMainDom.append(noUsersComponent());
      }
         
   })
   .catch(err => console.error(err));  
    
}

export default getUsersHandler;