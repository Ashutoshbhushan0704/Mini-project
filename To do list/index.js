const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const conatainer = document.querySelector(".container");

const task = [];

function showallTask () {
    task.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv = document.createElement("div");
        div.append(innerdiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerdiv.append(p);


        
        const span = document.createElement("span");
        span.innerText = value.title;
        innerdiv.append(span);


const btn = document.createElement("button");
btn.setAttribute("class","deletebtn");
btn.innerText = "-";

btn.addEventListener("click" , ()=>{
    task.splice(index,1);
    console.log(task);
    
})




div.append(btn);
conatainer.append(div);

    });
}
function removeTask(){
    task.forEach(()=>{
     const div = document.querySelector("task");
     div.remove();
    });
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    removeTask();

    task.push({
        title: title.value,
        description : description.value,
    });
        
    localStorage.setItem("task",JSON.stringify(task));
    showallTask();
});