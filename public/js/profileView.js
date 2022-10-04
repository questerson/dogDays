const message = document.getElementById('messageBtn') 
const messageForm = document.getElementById('messageForm')
message.addEventListener ('click', showMessageForm)

function showMessageForm  (){
    messageForm.style.display = 'block'

}