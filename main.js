const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list container");
function addTask(){
    alert
}
{let li =
    document.createElement("li");
    li.innerHTML = inputBox.ariaValue;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
{
inputBox.value = "";
saveData();
}
listContainer.addEventLi
stener("click")
{
    if(e.target.tagName ==="SPAN"){
        e.target.parentElement.removed();
        saveData();
    }
}false

function saveData(){
    localstorage.setltem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();