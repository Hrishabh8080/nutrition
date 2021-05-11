import React from 'react'
import '../css/DiteChart.css'
 const DiteChart = (props) => {
    return (

        <section className="main">
            <h1 className='dite__headingTitle'>Nutrition Facts</h1>
            <hr className='dite__hr1' />
            <p className='dite__amountPerSaving'>Amount Per Serving</p>
            <div className="dflex  abc">
                <h1 className='diet__headingCalory '>Calories</h1>
                <p className='value'>{props.calories}</p>
            </div>
            <hr className='dite__hr2' />
            <p className='dite__dailyValue'>% Daily Value*</p>
            <div className='dflex'>
                <h5 className='dite__heading1 dflex1'>Total Fat
                <p className="value">{props.totalFatValue}</p></h5>
                <p className='value1'>{props.totalFat}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1'>Saturated Fat
                <p className="value">{props.saturatedFatValue}</p></h5>
                <p className='value1'>{props.saturatedFat}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1'>Trans Fat -
                <p className="value">{props.transFatValue}</p></h5>
                <p className='value1'>{props.transFat}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading1 dflex1'>Cholesterol
                <p className="value">{props.cholesterolValue}</p></h5>
                <p className='value1'>{props.cholesterol}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading1 dflex1'>Sodium
                <p className="value">{props.sodiumValue}</p></h5>
                <p className='value1'>{props.sodium}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading1 dflex1'>Total Carbohydrate 
                <p className="value">{props.totalCarbohydrateValue}</p></h5>
                <p className='value1'>{props.totalCarbohydrate}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1'>Dietary Fiber
                <p className="value">{props.dietaryFiberValue}</p></h5>
                <p className='value1'>{props.dietaryFiber}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1' >Total Sugars
                <p className="value">{props.totalSugerValue}</p></h5>
                <p className='value1'>{props.totalSuger}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1'>Includes - 
                <p className="value">{props.includeSugerValue}</p></h5>
                <p className='value1'>{props.includeSuger}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading1 dflex1'>Protein
                <p className="value">{props.ProtineValue}</p></h5>
                <p className='value1'>{props.Protine}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1'>Vitamin D
                <p className="value">{props.vitaminDValue}</p></h5>
                <p className='value1'>{props.vitaminD}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1'>Calcium
                <p className="value">{props.calciumValue}</p></h5>
                <p className='value1'>{props.calcium}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1'>Iron 
                <p className="value">{props.ironValue}</p></h5>
                <p className='value1'>{props.iron}</p>
            </div>
            <div className='dflex'>
                <h5 className='dite__heading dflex1'>Potassium
                <p className="value">{props.potassiumValue}</p></h5>
                <p className='value1'>{props.potassium}</p>
            </div>
            <br />
            <br />
            <p className='small'>*Percent Daily Values are based on a 2000 calorie diet</p>
        </section>

    )
}
export default DiteChart