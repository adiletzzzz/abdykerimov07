let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')



const PLUS =()=> {
   let plus = parseInt(num1.value)+parseInt(num2.value)
   document.getElementById('result').innerHTML = plus

}   