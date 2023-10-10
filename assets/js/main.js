const menu = document.querySelector(".menu")
const menuHeight = menu.clientHeight
const backBtn = document.querySelector(".btn-back")


window.addEventListener("scroll", function(e){
    const pageY = window.pageYOffset
    if(pageY >= menuHeight){
        menu.classList.add("is-active")
        document.body.style.marginTop = `${menuHeight}px`
        backBtn.classList.add("is-active")
    }else{
        menu.classList.remove("is-active")
        document.body.style.marginTop = 0;
        backBtn.classList.remove("is-active")
    }
})

backBtn.addEventListener("click", function(e){
    e.preventDefault();
    window.scrollTo(0, 0);
})