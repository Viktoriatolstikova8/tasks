const node_for_click = document.getElementById("for_click")

function find_edit(){
    const lastName  = document.getElementsByTagName('span')[1]
    console.log(lastName.innerText)
    lastName.innerText = 'Tolstikova'

    const firstName  = document.getElementsByTagName('span')[2]
    console.log(firstName.innerText)
    firstName.innerText = 'Viktoria'

    const middleName  = document.getElementsByTagName('span')[3]
    console.log(middleName.innerText)
    middleName.innerText = 'Alekseevna'

}

node_for_click.addEventListener("click",find_edit)