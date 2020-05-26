const date =document.getElementById("date");
const options = {weekday:"long", month:"short",day:"numeric" , year:"numeric"}
const today= new Date();
date.innerHTML = today.toLocaleDateString("en-US",options);

const check ="fa-check-circle";
 const uncheck ="fa-circle";
 const line_through = "lineThrough";
 
 const Done = done? check : uncheck ;
  const Line = done? line_through :"";

//adding new tem to the list
function AddToDo (todo,id,done){
  const addList = document.createElement("li");
  const input= document.getElementById("input-text").value;
  const deadline =document.getElementById("deadline").value;
  const priority = document.getElementsByClassName("dropdown-menu").value;
  addList.innerHTML=`${input} ${deadline} ${priority}`;
  const list = document.getElementById("ulist");
  list.appendChild(addList);
  addList.className="item";
  addList.classList.add("`${Line}`");
  
document.getElementById("input-text").value = "";
document.getElementById("deadline").value = "";


const span = document.createElement("span");
span.className="fa fa-trash-o";
span.classList.add("trash");
span.id = "`{id}`";
addList.appendChild(span);

let trash = document.getElementsByClassName("trash");
let i ;
for (i = 0; i < trash.length; i++) {
  trash[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
const span2 = document.createElement("span");
span2.className = "far ${Done} ";
span2.classList.add("circle");
span2.id = "`${id}`";
addList.appendChild(span2);

}

