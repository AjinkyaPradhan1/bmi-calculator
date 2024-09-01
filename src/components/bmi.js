import React, { useMemo, useState } from 'react'
import '../App.css'

const BMI = () => {

    const [height,setHeight] = useState(170)
    const [weight,setWeight] = useState(60)

    const onWeightChange = (event) => {
        setWeight(event.target.value)
    }

    const onHeightChange = (event) => {
        setHeight(event.target.value)
    }
    const BMICalculation = useMemo(()=>{
        const h = height/100;
        return (weight/(h*h)).toFixed(3)
    },[weight,height])

    const BMIReport = useMemo(()=>{
        if(BMICalculation<18.5){
            return "Underweight"
        }else if(BMICalculation>=18.5 && BMICalculation<24.9){
            return "Healthy Weight"
        }
        else if(BMICalculation>=25 && BMICalculation<29.9){
            return "OverWeight"
        }
        else if(BMICalculation>=30 && BMICalculation<39.9){
            return "Obesity"
        }else{
            return "Severe Obesity"
        }
    },[BMICalculation])

    return(
        <div className='main'>
            <div className="bmi-main">
                <div className="header">BMI CALCULATOR</div>
                <div className="body">
                    <label>Height : {height}cm</label>
                    <input type="range" 
                    className='slider'
                    id="height" 
                    min="0"
                    max="500"
                    onChange={onHeightChange}
                    required/>

                    <label>Weight : {weight}kg</label>
                    <input type="range" 
                    className='slider'
                    id="weight" 
                    min="0"
                    max="500"
                    step="1"
                    onChange={onWeightChange}
                    required/>
                </div>
                <div className="result">Your BMI: {BMICalculation}</div>
            </div>

            <div className="filler"></div>
            <div className="result-main">Your BMI Range:
                <div className="result-main-report">
                    {BMIReport}
                </div>
            </div>
        </div>


    )
}

export default BMI;