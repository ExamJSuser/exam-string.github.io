function left() {
    let leftStr = document.getElementById("inp").value;

    let lorem = document.getElementById("lorem");

    let leftA = leftStr.substring(0, 2);
    let leftB = leftStr.substring(leftStr.length,2);

    lorem.innerHTML += leftB + leftA;
};