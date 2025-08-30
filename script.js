
let btnCalculate = document.getElementById('calculate')

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
    } else (
        status = 'obesity'
    )
    console.log(status)

   
}

)
