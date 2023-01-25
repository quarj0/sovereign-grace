// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})
 

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})




// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nave menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

// ############# Donation page ######
var amountv = document.getElementById('amountv');
amountv.addEventListener("input",updateValue);
function updateValue(e) {
var am = Math.round(((parseInt(e.srcElement.value)+100) / (1 - 0.039)), 2);
document.getElementById("amount").value = am ? am : '';
document.getElementById("total").innerHTML = am ? am : '';
}
function isNumber(evt) {
evt = (evt) ? evt : window.event;
var charCode = (evt.which) ? evt.which : evt.keyCode;
if (charCode > 31 && (charCode < 48 || charCode > 57)) {
return false;
}
return true;
}
var paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
e.preventDefault();
var email = document.getElementById("email-address").value;
var amount = document.getElementById("amount").value;
var firstname = document.getElementById("first-name").value;
var lastname = document.getElementById("last-name").value;
if(email && amount && firstname && lastname){
var handler = PaystackPop.setup({
key: 'pk_live_your_public_key', // Replace with your public key
email: email,
amount: amount*100,
firstname: firstname,
lastname: lastname,
ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. 
//  Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you 
// label: "Optional string that replaces customer email"
onClose: function(){
alert('Window closed.');
},
callback: function(response){
var message = 'Payment complete! Reference: ' + response.reference;
alert(message);
}
});
handler.openIframe();
}
else{
alert('all fields are required')
}
}
