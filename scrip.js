let item = document.querySelectorAll('.item');
const nav = document.getElementById('nav');
console.log(nav);
const addClass = ()=>{
    console.log(window.scrollY);
        if(window.scrollY > 100){
            console.log("success");
            nav.classList.add("tofixed")
        }else{
            nav.classList.remove('tofixed');
        }
        item.forEach(item =>{
            if(item.offsetTop - window.scrollY < 350){
                item.classList.add('active');
            }
        })
}
document.addEventListener("scroll", addClass)