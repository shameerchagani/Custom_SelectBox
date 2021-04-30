let selectField = document.getElementById('selectorField')
let selectText = document.getElementById('selectText')
let options= document.getElementsByClassName('options')
let list = document.getElementById('list')
let arrowIcon = document.getElementById('arrowIcon')
for (option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent
        list.classList.toggle("hide")
        arrowIcon.classList.toggle('arrow')
    }
}
selectField.onclick = function(){
    list.classList.toggle("hide")
    arrowIcon.classList.toggle('arrow')
}


