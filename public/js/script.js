//SCROLLIN EFFECT
const sectionHome = document.querySelector(".firstSection");
document.querySelector(".home-link").addEventListener("click", ()=>{
    sectionHome.scrollIntoView({ behavior:"smooth"});
})

const sectionDestination = document.querySelector(".thirdSection");
document.querySelector(".destination-link").addEventListener("click", ()=>{
    sectionDestination.scrollIntoView({ behavior:"smooth"});
})

const sectionService = document.querySelector(".servicesContainer");
document.querySelector(".service-link").addEventListener("click", ()=>{
    sectionService.scrollIntoView({ behavior:"smooth"});
})
const sectionShop = document.querySelector(".shopContainer");
document.querySelector(".shop-link").addEventListener("click", ()=>{
    sectionShop.scrollIntoView({ behavior:"smooth"});
})
const sectionBlog = document.querySelector(".blogContainer");
document.querySelector(".blog-link").addEventListener("click", ()=>{
    sectionBlog.scrollIntoView({ behavior:"smooth"});
})
const sectionContact = document.querySelector(".contactContainer");
document.querySelector(".contact-link").addEventListener("click", ()=>{
    sectionContact.scrollIntoView({ behavior:"smooth"});
})