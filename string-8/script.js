function extraEnd(str){
    let inp = document.getElementById("inp").value;
    let num = inp.substring(1, inp.length - 1);
    let lorem = document.getElementById("lorem");
    lorem.innerHTML += num;
}