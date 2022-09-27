const thumbText = document.querySelectorAll('.fa-plus')


Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteRapper)
})

async function deleteRapper(){
    const fName = this.parentNode.childNodes[1].innerText
    const eDate = this.parentNode.childNodes[3].innerText
    const fType = this.parentNode.childNodes[5].innerText
    try{
        const response = await fetch('deleteRapper', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            food: JSON.stringify({
              'foodNameS': fName,
              'entryDateS': eDate,
              'foodTypeS': fType
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}