function save(event){
    event.preventDefault();
    const amount=event.target.examount.value;
    const descrip=event.target.description.value;
    const cate=event.target.category.value;
    const obj={
      amount,
      descrip,
      cate
    };
    localStorage.setItem(obj.amount, JSON.stringify(obj))
     displayInScreen(obj);

     function displayInScreen(obj){
    const parentEle=document.getElementById("items")
    const childEle=document.createElement("li")
    childEle.textContent= obj.amount + ' - ' + obj.descrip + ' - ' + obj.cate;
     const deleteBtn=document.createElement("input")
     deleteBtn.style.backgroundColor="red";
     deleteBtn.type="button";
     deleteBtn.value="Delete Expense";
     deleteBtn.onclick=()=>{
      localStorage.removeItem(obj.amount)
      parentEle.removeChild(childEle)
     }
    const editBtn= document.createElement("input");
    editBtn.style.backgroundColor="blue";
    editBtn.type="buttom";
    editBtn.value="Edit Expense"
    editBtn.onclick=()=>{
      localStorage.removeItem(obj.amount)
      parentEle.removeChild(childEle)
      document.getElementById('amountInputTag') .value=obj.amount;
      document.getElementById('descripInputTag') .value=obj.descrip;
      document.getElementById('cateInputTag') .value=obj.cate;
    
    }
     childEle.appendChild(deleteBtn)
     childEle.appendChild(editBtn)
    parentEle.appendChild(childEle);
     }
    
    }