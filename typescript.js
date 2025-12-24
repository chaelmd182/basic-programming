document.addEventListener('DOMContentLoaded', function () {
  console.log('page loading');
  })


function showRegister() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("registerBox").style.display = "block";
}

function showLogin(){
  document.getElementById("registerBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}
const textbtn = document.getElementById('textbtn');
const text1btn = document.getElementById('text1btn');
const ext2btn = document.getElementById('ext2btn');
const text3btn = document.getElementById('text3btn');
const text4btn = document.getElementById('text4btn');
const showtext = document.getElementById('showtext');
const cleckbtn = document.getElementById('cleckbtn');
cleckbtn.addEventListener('click', function () {
  showtext.textContent="please fillout this"
})