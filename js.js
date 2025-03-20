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
})
img.addEventListener("click",()=>{
        img.style.visibility = "hidden"
        img.style.opacity = 0
        text.style.visibility = "hidden"
        text.style.opacity = 0

})
