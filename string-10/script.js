function nonStart(){
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;

    let lorem = document.getElementById("lorem");
  
    let lenA = inp1.substring(1);
    let lenB = inp2.substring(1);
    
    lorem.innerHTML += lenA + lenB;
}