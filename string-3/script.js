let btn = document.querySelectorAll("button");
let p = document.getElementById("lorem")
let tag = `i`;

function makeTags(tag, word){
    let inp = document.getElementById("inp").value;
    p.innerHTML += `<${tag}>${inp}</${tag}>`;
}