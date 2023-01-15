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
    localStorage.setItem('userDetails', JSON.stringify(obj));
    



}