let button = document.querySelector('button');
let input = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField');

input.addEventListener('keydown', function(event) {
    duplicateField.textContent = input.value;
})
    


button.addEventListener('mousedown', (event) =>{
    if (event.which === 1){
    console.log(input.value);
    document.querySelector('input').value = "";
    document.querySelector('#duplicateField').value = "";
}
})


