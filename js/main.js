// Theme Changer 

let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let body = document.getElementById('body');

moon.addEventListener('click', ()=>{
    if(moon.className == "uil uil-sun"){
        moon.className = "uil uil-moon";
        body.className = "";
    }else{
        moon.className = "uil uil-sun";
        body.className = "dark-theme";
    }
})



// NavBar Shadow on Scroll && Hide Scroll-Down-Btn

let nav = document.getElementById('nav');
let scroll_down_btn = document.getElementById('scroll-down-btn');

window.addEventListener('scroll',  () => {
    let y = window.scrollY;
    if(y>0){
        nav.className = "boxShadow";
    }else{
        nav.className = " ";
    }
    if(y>180){
        scroll_down_btn.className = "scroll-down vis-hide"
    }else{
        scroll_down_btn.className = "scroll-down"
    }
});

// HamBurger NavBar

let ham_btn = document.getElementById('hamBurger');
let ham_icon = document.getElementById('hamIcon');
let bottom_nav = document.getElementById('bottom-nav');
let mini_link = document.querySelectorAll('.mini-mob-link');

ham_btn.addEventListener('click', ()=>{
    if(bottom_nav.className == "bottom-nav vis-hide-nav"){
        bottom_nav.className = "bottom-nav";
        ham_icon.className = "uil uil-times";
        for(let num in mini_link){
            mini_link[num].classList.remove = "hide";
        }
    }else{
        bottom_nav.className = "bottom-nav vis-hide-nav";
        ham_icon.className = "uil uil-list-ui-alt";
        for(let num in mini_link){
            mini_link[num].classList.add = "hide";
        }
    }

});


// Back to Top JS 

let btn_up = document.getElementById('btn-up');


window.addEventListener('scroll',  () => {
    let y = window.scrollY;
    if(y>500){
        btn_up.className = "back_to_top btn btn-up btn-show";
    }else{
        btn_up.className = "back_to_top btn btn-up btn-hide";
    }
});

// Skills Opener Key JS

let frontend_up = document.getElementById('frontend_up');
let frontend_down = document.getElementById('frontend_down');
let frontend_skills = document.getElementById('front_skills');
let backend_up = document.getElementById('backend_up');
let backend_down = document.getElementById('backend_down');
let backend_skills = document.getElementById('back_skills')
let technical_up = document.getElementById('technical_up');
let technical_down = document.getElementById('technical_down');
let technical_skills = document.getElementById('tech_skills')


// FrontEnd Skill Hider 
frontend_up.addEventListener('click', ()=>{
    frontend_skills.className = "skills-name vis-hide";
    frontend_down.className = "uil uil-angle-down";
    frontend_up.className = "uil uil-angle-up hide";
});

frontend_down.addEventListener('click', ()=>{
    frontend_skills.className = "skills-name";
    frontend_down.className = "uil uil-angle-down hide";
    frontend_up.className = "uil uil-angle-up";
    backend_skills.className = "skills-name vis-hide";
    backend_up.className = "uil uil-angle-up hide";
    backend_down.className = "uil uil-angle-down";
    technical_skills.className = "skills-name vis-hide";
    technical_up.className = "uil uil-angle-up hide";
    technical_down.className = "uil uil-angle-down";
    
});

// BackEnd Skill Hider
backend_up.addEventListener('click', ()=>{
    backend_skills.className = "skills-name vis-hide";
    backend_down.className = "uil uil-angle-down";
    backend_up.className = "uil uil-angle-up hide";
});

backend_down.addEventListener('click', ()=>{
    backend_skills.className = "skills-name";
    backend_down.className = "uil uil-angle-down hide";
    backend_up.className = "uil uil-angle-up";
    frontend_skills.className = "skills-name vis-hide";
    frontend_down.className = "uil uil-angle-down";
    frontend_up.className = "uil uil-angle-up hide";
    technical_skills.className = "skills-name vis-hide";
    technical_up.className = "uil uil-angle-up hide";
    technical_down.className = "uil uil-angle-down";
});

// Technical Skill Hider
technical_up.addEventListener('click', ()=>{
    technical_skills.className = "skills-name vis-hide";
    technical_down.className = "uil uil-angle-down";
    technical_up.className = "uil uil-angle-up hide";
});

technical_down.addEventListener('click', ()=>{
    technical_skills.className = "skills-name";
    technical_down.className = "uil uil-angle-down hide";
    technical_up.className = "uil uil-angle-up";
    frontend_skills.className = "skills-name vis-hide";
    frontend_down.className = "uil uil-angle-down";
    frontend_up.className = "uil uil-angle-up hide";
    backend_skills.className = "skills-name vis-hide";
    backend_up.className = "uil uil-angle-up hide";
    backend_down.className = "uil uil-angle-down";
});

// Qualification Education/Work Toggle JS

let education = document.getElementById('education');
let work = document.getElementById('work');
let education_detail = document.getElementById('education_detail_summary');
let work_detail = document.getElementById('work_detail_summary');

education.addEventListener('click', ()=>{
    education.className = "education_head active";
    work.className = "work_head";
    education_detail.className = "details_qualification";
    work_detail.className = "details_qualification hide";
});

work.addEventListener('click', ()=>{
    work.className = "work_head active";
    education.className = "education_head";
    work_detail.className = "details_qualification";
    education_detail.className = "details_qualification hide";
});


// ViewMore Services JS

let portfolioWeb = document.getElementById('portfolioWeb');
let ecomWeb = document.getElementById('ecomWeb');
let networkSupport = document.getElementById('networkSupport');
let portfolioView = document.getElementById('view-portfolio');
let ecomView = document.getElementById('view-ecom');
let networkView = document.getElementById('view-network');
let close = document.getElementsByClassName('close-btn');

portfolioView.addEventListener('click', ()=>{
    portfolioWeb.className = "container-viewmore";
});

ecomView.addEventListener('click', ()=>{
    ecomWeb.className = "container-viewmore";
});

networkView.addEventListener('click', ()=>{
    networkSupport.className = "container-viewmore";
});

for(let i=0; i<3; i++){
close[i].addEventListener('click', ()=>{
    portfolioWeb.className = "container-viewmore vis-hide";
    ecomWeb.className = "container-viewmore vis-hide";
    networkSupport.className = "container-viewmore vis-hide";
});
}

// SLIDER JS 
let left_btn = document.getElementById('left-btn');
let right_btn = document.getElementById('right-btn');
let prev = document.getElementById('img1');
let curr = document.getElementById('img2');
let next = document.getElementById('img3');

left_btn.addEventListener('click', () => {
    prev.className = "portfolio";
    curr.className = "vis-hide-right portfolio";
    next.className = "vis-hide-left portfolio";
    if(curr == document.getElementById('img2')){
        prev = document.getElementById('img3');
        curr = document.getElementById('img1');    
        next = document.getElementById('img2');
    }else if(curr == document.getElementById('img1')){
        prev = document.getElementById('img2');
        curr = document.getElementById('img3');    
        next = document.getElementById('img1');
    }else{
        prev = document.getElementById('img1');
        curr = document.getElementById('img2');    
        next = document.getElementById('img3');
    };          
});                                            

right_btn.addEventListener('click', () => {
    prev.className = "vis-hide-right portfolio";
    curr.className = "vis-hide-left portfolio";
    next.className = "portfolio";
    if(curr == document.getElementById('img2')){
        prev = document.getElementById('img2');
        curr = document.getElementById('img3');    
        next = document.getElementById('img1');
    }else if(curr == document.getElementById('img3')){
        prev = document.getElementById('img3');
        curr = document.getElementById('img1');    
        next = document.getElementById('img2');
    }else{
        prev = document.getElementById('img1');
        curr = document.getElementById('img2');    
        next = document.getElementById('img3');
    };
});

// ***Setting Auto Sliding After 5 Seconds***

setInterval(click_right, 5000);

function click_right(){
    right_btn.click();
}


// Contact Me JS

let form = document.getElementById('form');
let alert = document.getElementById("alert");
let close_alert = document.getElementById('close-alert')

function resetForm() {
    document.contact-form.reset();
}

close_alert.addEventListener('click', ()=>{
    alert.className = "alert btn btn-alert vis-hide";
})

// For Sending Mail Through Contact Me

const scriptURL = 'https://script.google.com/macros/s/AKfycbxsmAUN2qUsc1hY6pUUcEQuzy9oKNpZNzTzU9tbD1Xgac6LQoA/exec'

form.addEventListener('submit', e => {
    e.preventDefault()
    alert.className = "alert btn btn-alert";
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('message send Successfully'))
    .catch(error => console.error('Error!', error.message))
    .then(resetForm())
})



