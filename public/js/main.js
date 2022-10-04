const thumbText = document.querySelectorAll('.fa-plus')
console.log("hello")

// Array.from(deleteText).forEach((element)=>{
//     element.addEventListener('click', deleteRapper)
// })

// async function deleteRapper(){
//     const fName = this.parentNode.childNodes[1].innerText
//     const eDate = this.parentNode.childNodes[3].innerText
//     const fType = this.parentNode.childNodes[5].innerText
//     try{
//         const response = await fetch('deleteRapper', {
//             method: 'delete',
//             headers: {'Content-Type': 'application/json'},
//             food: JSON.stringify({
//               'foodNameS': fName,
//               'entryDateS': eDate,
//               'foodTypeS': fType
//             })
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }
form = document.getElementById('formComment')
postId = form.getAttribute('data-id')

function refreshComment(){
   async function getComments(){
    try{
        const response = await fetch(`refresh/${postId}`, {
            method: 'get',
            headers: {'Content-type': 'application/json'} 
        })
        console.log("commentreturn")
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

    getComments()
    //setTimeout(refreshComment, 5000);
}

refreshComment();



console.log(form)
console.log(postId)
