const genBtn = document.getElementById('gen-button'); 
var SHA256 = require("crypto-js/sha256");
var copy = require("copy-to-clipboard");
var copied = document.getElementById('copied'); 
var secondtitle = document.getElementById('secondtitle');
var pwd,pass; 

genBtn.onclick = createPwd;


function createPwd(){
    pass = document.getElementById('input-gen').value;
    pwd = SHA256(pass).toString();
    document.getElementById('pwd').innerText = pwd;
    copy(pwd);
    copied.classList.toggle('hide');
    secondtitle.classList.add('hide');
}
