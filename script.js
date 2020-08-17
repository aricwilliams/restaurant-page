const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    e.preventDefault();

   return showError(input, 'hey');
});


function showError(input, message){
    const formgroup =document.querySelector(.form-control);
    formgroup.className = 'form-group error';
}