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
       //parentElement.innerHTML= parentElement.innerHTML + `<li> ${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`;
      const childElement= document.createElement('li')
      childElement.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber;

//detelete element:
        const deleteButton=document.createElement('input')
        deleteButton.style.backgroundColor="red";
        deleteButton.type="button";
        deleteButton.value="   Delete";
        deleteButton.onclick = () => {
            localStorage.removeItem(obj.email)
            parentElement.removeChild(childElement)

        }
        const editButton = document.createElement('input')
        editButton.type = "button";
        editButton.value = "edit";
        editButton.onclick = () => {
localStorage.removeItem(obj.email)
parentElement.removeChild(childElement)
document.getElementById('usernameInputTag').value =  obj.name
document.getElementById('emailInputTag').value =  obj.email
document.getElementById('phoneNumberInputTag').value =  obj.phonenumber
       
    }
    childElement.appendChild(deleteButton)
          childElement.appendChild(editButton)
          parentElement.appendChild(childElement)
    
    }
}