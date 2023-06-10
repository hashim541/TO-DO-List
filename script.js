var arr=["#ffc859",
    "#fcff59",
    "#9bff59",
    "#59ffba",
    "#59f7ff",
    "#59b4ff",
    "#596aff",
    "#ac59ff",
    "#ff59fc",
    "#ff5988"

]

var box =document.querySelector("#dailoug-box");
var container=document.querySelector(".container22");

document.querySelector(".add").addEventListener("click",show);
function show(){
    document.querySelector(".container").style.opacity="0.2";
    box.classList.remove("hidden-box");
    box.classList.add("visible-box");
}
document.querySelector(".create").addEventListener("click",function(){
    var title=document.querySelector("#title");
    var description=document.querySelector("#description");
    if(title.value != '' && description.value != ''){
        appendTask(title.value,description.value);
    }
    hide();
    location.reload();
});
document.querySelector(".clr").addEventListener("click",function(){
    localStorage.clear();
    location.reload();
});

const entries = Object.entries(localStorage);
if(localStorage.length !=0){
    for (var i=0;i<localStorage.length;i++){
        var divbar=document.createElement("div");
        container.append(divbar);
        var z=random();
        
        divbar.setAttribute("style","background-color:"+z)
        divbar.classList.add("containers");
        divbar.setAttribute("id","task"+i);

        var divbars=document.querySelector("#task"+i);

        var divbar2=document.createElement("div");
        divbars.append(divbar2);
        divbar2.classList.add("title-description");

        var h4bar=document.createElement("h4");
        divbar2.append(h4bar);
        h4bar.setAttribute("class","h4bar");
        h4bar.innerHTML=entries[i][0];
        var pbar=document.createElement("p");
        divbar2.append(pbar);
        pbar.setAttribute("class","para");
        pbar.innerHTML=entries[i][1];

        var buttonbar=document.createElement("button");
        divbars.append(buttonbar);
        buttonbar.innerText="delete";
        buttonbar.classList.add("delete")
        buttonbar.setAttribute("id",entries[i][0]);

        buttonbar.addEventListener("click",function(e){
            let tar=e.target;
            var item=$(this).attr("id");
            localStorage.removeItem(item);
            tar.parentElement.remove();
            
            
        });
    }
}
function hide(){
    document.querySelector(".container").style.opacity="1";
    box.classList.add("hidden-box");
    box.classList.remove("visible-box");
}

function appendTask(title,description){
    localStorage.setItem(title,description);
}
function random(){
    var r=Math.random()
    r=r*10;
    var a=Math.floor(r);
    return arr[a];
}
