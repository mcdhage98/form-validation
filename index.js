const form=document.getElementById('form')
const userName=document.getElementById('userName')
const email=document.getElementById('email')
const password=document.getElementById('password')
const checkPassword=document.getElementById('checkPassword')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
})

const checkInputs=()=>{
   const userNameValue= userName.value.trim();
   const emailValue=email.value.trim();
   const passwordValue=password.value.trim();
   const checkPasswordValue=checkPassword.value.trim();

   if(userNameValue===''){
       setErrorFor(userName,"UserName cannot be empty")
   }
   else{
        setSuccessFor(userName)
   }
}

const setErrorFor=(input, message)=>{
    const formControl=input.parentElement;
    const small=formControl.querySelector('small')
    small.innerText=message;
    formControl.className+=` error`;
}