let p = document.getElementById("data");
let btn = document.querySelector("button");

function hello(ism) {
    p.innerHTML += 'Hello ' + ism + '!' + '<br>';
}
btn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    hello(name)
});