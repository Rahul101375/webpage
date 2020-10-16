var links=document.getElementByTagName("a");
var i;
for(i=0; i<links.length; i++)
{
    links[i].className = "link-" + i;
    // console.log("Hello:" + i);
}