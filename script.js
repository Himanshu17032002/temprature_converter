let celclusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')


let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

celclusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celclusInput.value)
    let fTemp = (cTemp*(9/5))+32
    let kTemp = cTemp + 273.15


    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    
})
fahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32 ) *(5/9)
    let kTemp = (fTemp -32) * (5/9)  + 273.15


    celclusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)

})
kelvinInput.addEventListener('input',function(){
    let  kTemp = parseFloat(kel.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5)  + 32


    celclusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)

})

btn.addEventListener('click',()=>{
    celclusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})
