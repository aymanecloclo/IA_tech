const myModal = document.getElementById('staticBackdrop')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

document.getElementById('searchIcon').addEventListener('click', function() {
  var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
  modal.show();
});


  function afficherModal() {
      var myModal = new bootstrap.Modal(document.getElementById('exampleModal5'));
      myModal.show();
  }


  document.addEventListener('DOMContentLoaded', function() {
      var signInButton = document.getElementById('signInButton');
      signInButton.addEventListener('click', function() {
          var modal = new bootstrap.Modal(document.getElementById('exampleModal5'));
          modal.show();
      });
  });
  AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 20, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function validateForm(event){
    event.preventDefault();
    let inputs = document.querySelectorAll('#envoyer .form-control');
    let isValid = true;
    inputs.forEach(input=>{
        let feedbackElement = document.getElementById(input.id + '_feedback');
        if (input.value.trim()==""){
            feedbackElement.innerHTML="ce champs est obligatoire !";
            isValid = false;
        }else{
            feedbackElement.innerHTML="";
        }
    });
    if(isValid){
        alert('votre messasge a bien eté envoyer!')
    }
    let message = get.ElementById('message-text');
    if(message.value.trim()==""){
       document.getElementById('feedback').innerHTML='veuillez saisir votre message !';
    }
}
