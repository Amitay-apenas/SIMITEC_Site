const LineObserver = new IntersectionObserver((dataEntrie) =>{
    dataEntrie.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})

const element = document.querySelectorAll(".hidden")

 element.forEach( (element) => LineObserver.observe(element))