//template_d4a50yj
//service_dphzodj
//Z3SkQxg_ht0haJhhv

let contrastToggle = false;
let isModalOpen = false;
const scaleFactor = 1 / 20;

function moveShapes(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px`
    }
}

function toggleMenu() {
    const navList = document.querySelector('.nav__link--list');
    navList.classList.toggle('show');
  }  

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += "dark-theme";
    }
    else{
        document.body.classList.remove("dark-theme");
    }
}

function copyEmailToClipboard() {
    var email = document.getElementById('envelope').getAttribute('data-email');
    var tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    var customAlert = document.getElementById('custom-alert');
    customAlert.classList.add('show');
    setTimeout(function() {
        customAlert.classList.remove('show');
    }, 3000);
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_dphzodj',
            'template_d4a50yj',
            event.target,
            'Z3SkQxg_ht0haJhhv'
        ).then(() => {
            loading.classList.remove(",odal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at zeeshan.hu@outlook.com"
            )
        })

}

function toggleModal(){
    isModalOpen = !isModalOpen;
    if(!isModalOpen) {
        return document.body.classList.remove("modal--open");
    }
    document.body.classList += " modal--open";
}