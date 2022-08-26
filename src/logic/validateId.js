
function validateUserId (id)
{
    var userIdNumber = Number(id);
    if(Number.isNaN(userIdNumber) || userIdNumber <= 0)    
    {
        return false;
    }
    else
    {
        return true;
    }

}

export default validateUserId;