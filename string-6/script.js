function extraEnd(str){
    let inp = document.getElementById("inp").value;
    let num = inp.substring(0,2);
    let lorem = document.getElementById("lorem");
    lorem.innerHTML += num + num + num;
}