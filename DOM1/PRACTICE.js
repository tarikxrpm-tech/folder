function createDiv(){
    var color=document.getElementById("color").value;
 var width=document.getElementById("width").value;
 var height =document.getElementById("height").value;

    document.querySelector("#div").style.backgroundColor=color
    document.querySelector("#div").style.width= width+"px"
    document.querySelector("#div").style.height= `${height}px`
}