let p = document.getElementById("data");
let btn = document.querySelector("button");

function hello(a,b) {
    p.innerHTML += a + b + b + a;
}
btn.addEventListener("click", function () {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    console.log(hello(name1, name2));
});