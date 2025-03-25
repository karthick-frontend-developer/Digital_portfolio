const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "files/sampleResume.pdf"; // Change this to the correct path
    link.download = "sampleResume.pdf"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
const btn2 = document.getElementById("btn2")
const img = document.getElementById("isee")
const text = document.querySelector(".final")
btn2.addEventListener("click",function(){
    
    img.style.visibility = "visible"
    img.style.opacity = 1
    text.style.visibility = "visible"
    text.style.opacity = 1
    if(screen.width <= 700)
    {
        img.style.transform = "scale(0.2)"
    }
    else
    {
        img.style.transform = "scale(0.5)"
    }
})
img.addEventListener("click",()=>{
        img.style.visibility = "hidden"
        img.style.opacity = 0
        text.style.visibility = "hidden"
        text.style.opacity = 0
        img.style.transform = "scale(0)"
})
const side_icon = document.querySelector(".useless")
const side_navbar = document.querySelector(".side_navbar")
function open_navbar()
{
    side_navbar.style.left = "0"
}
function close_navbar()
{
    side_navbar.style.left = "-60%"
}
console.log("Screen Width:", window.screen.width);
console.log("Screen Height:", window.screen.height);

