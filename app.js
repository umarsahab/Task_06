var button = document.getElementById('btn')
var textbox = document.getElementById('text')






button.addEventListener('click', getLength)

function getLength(){
    var value = textbox.value
    var inputLength = value.length

  document.getElementById('text').value = "length of input text is " + inputLength
  
}

var men = "umar";
console.log(men.length)
console.log();

