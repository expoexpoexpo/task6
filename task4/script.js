document.querySelector ('a').onclick = e;
function e() {
let userText = prompt ('Введите текст');
const userTextField = document.querySelector ('a');
userTextField.textContent = userText;
}
document.querySelector('a').addEventListener ('click', (event) => {
    event.preventDefault ();
})