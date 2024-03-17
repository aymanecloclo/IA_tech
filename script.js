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
