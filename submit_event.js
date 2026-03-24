const todoForm=document.querySelector('.form-todo');
const todoInput=document.querySelector('.form-todo input[type="text"]');
const ul=document.querySelector('.todo-list');

todoForm.addEventListener("submit",(eventObj)=>{
    eventObj.preventDefault();
    const input=todoInput.value;
    const list=document.createElement('li');
    const newHTML=`<span class="text">${input}</span>
                     <div class="todo-buttons">
                        <button class="done todo-btn">Done</button>
                        <button class="remove todo-btn">Remove</button>
                    </div> `;
       list.innerHTML=newHTML;
   ul.append(list);

    todoInput.value="";
});

ul.addEventListener("click",(ev)=>{

    //Remove
    if(ev.target.classList.contains("remove")){
const taregtedLI=ev.target.parentNode.parentNode;
taregtedLI.remove();
    }

    //Done button
    if(ev.target.classList.contains("done")){
        const lispan=ev.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="line-through";
    }
});