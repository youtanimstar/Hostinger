const mobileNav = document.querySelector('.mobile-navbar-btn');
const navHeader = document.querySelector('.header');
const toggleNavBar = ()=>{
    navHeader.classList.toggle('active');
}


mobileNav.addEventListener('click',()=>toggleNavBar());


const hero = document.querySelector('.hero');

const observer = new IntersectionObserver((entries)=>{
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false?document.body.classList.add('sticky'):document.body.classList.remove('sticky');
},{
    root: null,
    rootMargin: "-500px",
    threshold: 0,
});

observer.observe(hero);


const navbarLinks = document.querySelectorAll('.navbar-links');
const subMenu = document.querySelectorAll('.sub-menu');

navbarLinks[0].addEventListener('click', ()=>{
    for(i=0;i<navbarLinks.length;i++){
        if(i==0){
            subMenu[i].classList.toggle('active-menu');
        }
        else{
            subMenu[i].classList.add('active-menu');
        }
    }
})
navbarLinks[1].addEventListener('click', ()=>{
    for(i=0;i<navbarLinks.length;i++){
        if(i==1){
            subMenu[i].classList.toggle('active-menu');
        }
        else{
            subMenu[i].classList.add('active-menu');
        }
    }
})
navbarLinks[2].addEventListener('click', ()=>{
    for(i=0;i<navbarLinks.length;i++){
        if(i==2){
            subMenu[i].classList.toggle('active-menu');
        }
        else{
            subMenu[i].classList.add('active-menu');
        }
    }
})
navbarLinks[3].addEventListener('click', ()=>{
    for(i=0;i<navbarLinks.length;i++){
        if(i==3){
            subMenu[i].classList.toggle('active-menu');
        }
        else{
            subMenu[i].classList.add('active-menu');
        }
    }
})
navbarLinks[4].addEventListener('click', ()=>{
    for(i=0;i<navbarLinks.length;i++){
        if(i==4){
            subMenu[i].classList.toggle('active-menu');
        }
        else{
            subMenu[i].classList.add('active-menu');
        }
    }
})
