function addToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailId.value;
    const phonenumber=event.target.phonenumber.value;
    const obj={
        name: name,
        email:email,
        phonenumber:phonenumber
    };
    localStorage.setItem(obj.email, JSON.stringify(obj));
    resultInScreen(obj);
    function resultInScreen(obj){
        const parentElement= document.getElementById('listOfItems');
        parentElement.innerHTML= parentElement.innerHTML + `<li> ${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`;

    }
    

}