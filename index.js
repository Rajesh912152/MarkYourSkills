let rootEl=document.getElementById('root');

let todoList=[
    {
        text:"HTML",
        uniqueNo:1
    },
    {
        text:"CSS",
        uniqueNo:2
    },
    {
        text:"JavaScript",
        uniqueNo:3
    }
]
function changeColor(labelElId){
    let labelElement=document.getElementById(labelElId);
    labelElement.classList.toggle('color')
}

let headingEl=document.createElement('h1');
headingEl.textContent="Mark Your Skills";
headingEl.classList.add('text-center')
rootEl.appendChild(headingEl)

function createAppendTodo(todo){
    let todoId="todo"+todo.uniqueNo
    let inputElId="inputId"+todo.uniqueNo
    let labelElId="labelId"+todo.uniqueNo

    let containerEl=document.createElement('li');
    containerEl.classList.add('list')
    containerEl.id=todoId
    rootEl.appendChild(containerEl)

    let inputEl=document.createElement('input');
    inputEl.id=inputElId
    inputEl.setAttribute('type','checkbox')
    containerEl.appendChild(inputEl)

    let labelEl=document.createElement('label');
    labelEl.textContent=todo.text
    labelEl.id=labelElId
    labelEl.setAttribute('for',inputElId)
    labelEl.classList.add('ml-2')
    containerEl.appendChild(labelEl)

    inputEl.onclick=function(){
        changeColor(labelElId)
        
    }
}

for (let todo of todoList){
    createAppendTodo(todo)
}