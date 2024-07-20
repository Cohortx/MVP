Const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Don't be lazy, write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === |"Li"){
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }
}, false);