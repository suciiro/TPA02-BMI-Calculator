
let btnCalculate = document.getElementById('calculate')
let result = document.getElementById('result')

btnCalculate.addEventListener ('click', (event) =>{
    event.preventDefault()

    let bodyWeight = parseFloat(document.getElementById('weight').value)
    let bodyHeight = parseFloat(document.getElementById('height').value) /100
    let bmi = bodyWeight / (bodyHeight**2)
    console.log(bmi)

    let status =''
    if (bmi < 18.5){
        status = 'underweight'
    } else if ( bmi < 25){
        status = 'normal'
    } else if ( bmi < 30){
        status = 'overweight'
    } else {
        status = 'obesity'
    }
    console.log(status)

    result.textContent = `Your BMI is ${bmi.toFixed(1)} which means you are ${status}`
    
    if (isNaN(bodyHeight) || isNaN (bodyWeight) || bodyHeight <=0 || bodyWeight<=0){
        result.textContent = "Insert a Valid Number"
    }

}

)
