const left=document.querySelector(".left")
const right=document.querySelector(".right")
const slider=document.querySelector(".slider")
const images=document.querySelectorAll(".image")


let slideNumber=1;
const length=images.length
const nextSlide=()=>{
    slider.style.transform=`translateX(-${slideNumber * 600}px)`;
    slideNumber++;
};
const prevSlide=()=>{
    slider.style.transform=`translateX(-${(slideNumber-2) * 600}px)`;
    slideNumber--;
};
const getFirstSlide=()=>{
    slider.style.transform=`translateX(0px)`;
    slideNumber++;
};
const getLastSlide=()=>{
    slider.style.transform=`translateX(-${(length-1)* 600}px)`;
    slideNumber=length;
};
right.addEventListener("click",()=>{
    slideNumber < length? nextSlide(): getFirstSlide();
    
});
left.addEventListener("click",()=>{
slideNumber>1?prevSlide(): getLastSlide()
})
