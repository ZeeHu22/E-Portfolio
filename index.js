let contrastToggle = false;

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
    }, 3000); // Hide the alert after 3 seconds
}