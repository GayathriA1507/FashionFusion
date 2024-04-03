var search= document.getElementById("search")
var div1=document.querySelectorAll("#productcontainer > div")
var productpage=document.getElementById("productcontainer")

search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()
    for(i=0;i<div1.length;i++)
    {
        var productname=div1[i].querySelector("p").textContent.toUpperCase()
        if(productname.indexOf(entervalue)<0)
        {
            div1[i].style.display="none"
        }
        else{
            div1[i].style.display="block"
        }
    }
})