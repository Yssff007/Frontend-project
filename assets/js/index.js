var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var emailHelp = document.getElementById('emailHelp');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');
var inputName = document.getElementById('inputName');
var nameError = document.getElementById('nameError');

function validationName(){
  var regx = /^[\S\s]+[\S]$/ ;
  if(regx.test(inputName.value)==true){
    return true
  }
  else{
    nameError.classList.remove('d-none')
  }
}

function validationEmail(){
  var regx = /^[a-zA-Z0-9._-]{1,99}(@)[a-zA-Z0-9]{1,99}(.)[a-zA-Z]{1,3}$/;
  if(regx.test(inputEmail.value)==true){
    return true
  }
  else{
    emailHelp.classList.add('d-none')
    emailError.classList.remove('d-none')
  }
}
function validationPassword(){
  var regx =/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  if(regx.test(inputPassword.value)==true){
    return true
  }
  else{
    passwordError.classList.remove('d-none')
  }
}
var form = document.getElementById('form')
form.addEventListener('submit',function(event){
  if( validationEmail()==true && validationPassword()==true && validationName()==true ){
    form.submit();
    storeInfo();
  }
  else{
    event.preventDefault();
  }
});
var infoContainer = [];
if(localStorage.getItem('infoData') !== null){
  infoContainer =JSON.parse(localStorage.getItem('infoData'));
}
function storeInfo(){
    var info={
        name:inputName.value,
        email:inputEmail.value,
        password:inputPassword.value
    }    
    infoContainer.push(info);
    window.localStorage.setItem('infoData',JSON.stringify(infoContainer))

}







// logOutBtn.addEventListener('click',function(event){
//   window.location='http://127.0.0.1:5500/index.html'
//   deleteInfo()
// })
