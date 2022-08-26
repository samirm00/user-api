function getUser (id)
{
    const user =  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then( res => 
    {
        // CHECK RES STATUS
        if ( res.status === 200)
        {
            return res.json();
        }
        else
        {
            return false;
        }
        
    })
    .catch( err =>  console.error(err)); 
    
    return user;
}

export default getUser;



