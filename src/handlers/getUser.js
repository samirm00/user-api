
// IMPORT 
import userComponent   from "../components/user.js";
import noUserComponent from "../components/noUser.js";
import validateUserId  from "../logic/validateId.js";
import getUser         from "../../API/getUser.js";

// DOM ELEMENTS
var usersMainDom = document.getElementById("users");
const error      = document.getElementById("error");

function getUserHandler ( id )
{
   var userId = validateUserId(id);

   if(! userId)
   {
      error.innerText = "Please enter a valid id greater than zero"
      error.classList.add("show-error");

      return;
   }
   else
   {
      error.innerText = ""
      error.classList.remove("show-error");
   }
  
   getUser(id)  // RETURN PROMISE 
   .then(user =>
   {   
      if(user)
      {
         const UserInfo = userComponent(user);

         // We need to empty usersMainDom
         usersMainDom.innerHTML = "";
         usersMainDom.append(UserInfo);        
      }
      else
      {
         usersMainDom.innerHTML = "";
         if(Number(id) > 0)
         {
            usersMainDom.append(noUserComponent(id));
         }
         
      }

   })
   .catch(err => console.error(err));   
}

export default getUserHandler;