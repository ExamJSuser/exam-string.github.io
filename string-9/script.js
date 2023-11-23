function comboString() {
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;

    let lengA = inp2.length;
    let lengB = inp2.length;

    let lorem = document.getElementById("lorem");

    if (lengA > lengB) {
        lorem.innerHTML += inp2 +inp1 + inp2;
    }
    lorem.innerHTML += inp1 + inp2 +inp1;
}