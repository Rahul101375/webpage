var Colorchanger=document.getElementById("headerid");
var color=["red","green","orange","tan"];
var counter=0;
function header()
{
    if(counter==4){
        Colorchanger.style.background = 'blue';
        counter=0;
    }      
    else{
    Colorchanger.style.background = color[counter];
    counter++
    }
}
  setInterval(header, 3000);
