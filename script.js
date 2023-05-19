window.addEventListener('scroll', function(){
    let scroll = this.document.querySelector('.up-arrow')
    scroll.classList.toggle("active", this.window.scrollY > 500)
})


function scrollTop_(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}