function save(event){
event.preventDefault();
const name=event.target.username.value;
const email=event.target.emailId.value;
const phonenumber=event.target.phonenumber.value;
const obj={
  name,
  email,
  phonenumber
};
localStorage.setItem(obj.email, JSON.stringify(obj))
 displayInScreen(obj);
 function displayInScreen(obj){
const parentEle=document.getElementById("listOfItems")
const childEle=document.createElement("li")
childEle.textContent= obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber;
 const deleteBtn=document.createElement("input")
 deleteBtn.style.backgroundColor="red";
 deleteBtn.type="button";
 deleteBtn.value="delete";
 deleteBtn.onclick=()=>{
  localStorage.removeItem(obj.email)
  parentEle.removeChild(childEle)
 }
const editBtn= document.createElement("input");
editBtn.style.backgroundColor="blue";
editBtn.type="buttom";
editBtn.value="edit"
editBtn.onclick=()=>{
  localStorage.removeItem(obj.email)
  parentEle.removeChild(childEle)
  document.getElementById('nameInputTag') .value=obj.name;
  document.getElementById('emailInputTag') .value=obj.email;
  document.getElementById('numberInputTag') .value=obj.phonenumber;

}
 childEle.appendChild(deleteBtn)
 childEle.appendChild(editBtn)
parentEle.appendChild(childEle);
 }

}
