document.addEventListener('DOMContentLoaded', function() {
    console.log('page loaded ready for java')
}
)
const changetextBtn = document.getElementById('changetextBtn');
console.log(changetextBtn);
 
const dispalytext = document.getElementById('dispalytext')
changetextBtn.addEventListener('click',
    function () {
        console.log('button is clicked')   
       dispalytext.textContent=('java script barreeffama kana jijjiiri')
     }
)
const nameinput = document.getElementById('nameinput')
const ageInput = document.getElementById('ageInput')
const updateinfoBtn = document.getElementById('updateinfoBtn')
const waayeekee = document.getElementById('waayeekee')
updateinfoBtn.addEventListener('click', function () {
    const nameinput = document.getElementById('nameinput') 
    const ageInput = document.getElementById('ageInput')
    waayeekee.textContent= "maqaa  kee " + nameinput.value + " umree kee ammoo " + ageInput.value + " dha!"
  })