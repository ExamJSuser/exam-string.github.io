let btn = document.querySelector("button")
function makeOutWord(out, word){
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    lorem.innerHTML += inp1.substring(0,2) + inp2 + inp1.substring(inp1.legth -2);
};

btn.addEventListener("click", function () {
    // let inp1 = document.getElementById("inp1").value;
    // let inp2 = document.getElementById("inp2").value;
    console.log(makeOutWord(out, word));
});