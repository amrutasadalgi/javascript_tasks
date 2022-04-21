document.body.addEventListener("click",()=>
{
    // console.log("woijjl");
    if( document.querySelector(".chat-main").classList.contains("number-drop"))
    {
    document.querySelector(".chat-main").classList.toggle("number-drop");
    }
})
document.getElementById("num-drop").addEventListener("click",(e)=>
{
    e.stopPropagation();
    document.querySelector(".chat-main").classList.toggle("number-drop");
    if( document.querySelector(".chat-main").classList.contains("number-drop"))
{
    document.getElementById("arr").style.transform="rotate(180deg)"   
    
}
  else{
    document.getElementById("arr").style.transform="rotate(0deg)"   

}
});

/////////////////////////////////////////////
document.body.addEventListener("click",()=>
{
    if( document.querySelector(".domains-main").classList.contains("domain-drop"))
    {
    document.querySelector(".domains-main").classList.toggle("domain-drop");
        
    }
})
document.getElementById("domain-dropdown").addEventListener("click",(e)=>
{
    e.stopPropagation();
    document.querySelector(".domains-main").classList.toggle("domain-drop");
});


///////////////////////////////////////////////////////////
document.getElementById("signin-drop").addEventListener("click",()=>
{
    document.querySelector(".sign-main").classList.toggle("sign-drop");
    
})

var btn_left = document.querySelector("#left");
var btn_right= document.querySelector("#right");
var card_all= document.querySelector(".caro");
var per=0;

btn_left.addEventListener("click",()=>{
    per+=10;
    if(per>0) {per=0;}
    card_all.style.transform=`translate(${per}%)`;
    card_all.style.transition=`all ease 0.5s`;
})
btn_right.addEventListener("click",()=>{
    per-=10;
    if(per<-70) {per=-70;}
    card_all.style.transform=`translate(${per}%)`;
    card_all.style.transition=`all ease 0.5s`;
})
const faq=document.querySelectorAll(".faq");

faq.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})
//////////////////youtube vd//////////////////
document.querySelector(".icon").addEventListener("click",()=>
{
       document.querySelector(".iframe").classList.toggle("iframe-togg");         
})
document.querySelector("#cross").addEventListener("click",()=>
{
       document.querySelector(".iframe").classList.toggle("iframe-toggle");         
})













