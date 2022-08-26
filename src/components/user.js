function userComponent (user)
{

    // CREATE A USER CONTAINER 
    const  container = document.createElement("div");
    container.classList.add("user");


    // CREATE A CONTAINER FOR USER NAME AND COMPANY NAME
    var nameAndCompany = document.createElement("div");
    nameAndCompany.classList.add("name-company")

    var name = document.createElement("h2");
    name.classList.add("name");
    name.innerText =  `Name  : ${user.name}`;

    var company = document.createElement("h2");
    company.classList.add("company");
    company.innerText = `Company : ${user.company.name}`;

    nameAndCompany.append(name, company);

    // CREATE A CONTAINER FOR USER NAME AND WEBSITE
    var userNameAndWebsite = document.createElement("div");
    userNameAndWebsite.classList.add("userName-website");

    var userName = document.createElement("h2");
    userName.classList.add("user-name");
    userName.innerText = `UserName : ${user.username}`;

    var website = document.createElement("h2");
    website.classList.add("website");
    website.innerText = `Website : ${user.website}`;

    userNameAndWebsite.append(userName, website);


    // CREATE A CONTAINER FOR EMAIL AND CITY
    var emailAndCity = document.createElement("div");
    emailAndCity.classList.add("email-city");

    var email = document.createElement("h2");
    email.classList.add("email");
    email.innerText = `Email : ${user.email}`;

    var city = document.createElement("h2");
    city.classList.add("city");
    city.innerText = `City : ${user.address.city}`;

    emailAndCity.append(email, city);

    // CREATE A CONTAINER FOR PHONE AND ZIP CODE
    var phoneAndZipCode = document.createElement("div");
    phoneAndZipCode.classList.add("phone-zipCode");

    var phone = document.createElement("h2");
    phone.classList.add("phone");
    phone.innerText = `Phone : ${user.phone}`;

    var zipCode = document.createElement("h2");
    zipCode.classList.add("zipCode");
    zipCode.innerText = `ZipCode : ${user.address.zipcode}`;

    phoneAndZipCode.append(phone, zipCode);


    container.append(nameAndCompany, userNameAndWebsite, emailAndCity, phoneAndZipCode );

    return container;
}

export default userComponent;