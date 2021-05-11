import React, { Component } from 'react'
import HomeImg from '../image/home.jpg'
import DiteChart from './DiteChart'
import '../css/Home.css'
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            getDate: `1 cup rice,\n10 oz chickpeas`,
            d_calories: '-',
            d_totalFat: '-',
            d_saturatedFat: '-',
            d_transFat: '-',
            d_cholesterol: '-',
            d_sodium: '-',
            d_totalCarbohydrate: '-',
            d_dietaryFiber: '-',
            d_totalSuger: '-',
            d_includeSuger: '-',
            d_Protine: '-',
            d_vitaminD: '-',
            d_calcium: '-',
            d_iron: '-',
            d_potassium: '-',

            d_totalFatValue: '-',
            d_saturatedFatValue: '-',
            d_transFatValue: '-',
            d_cholesterolValue: '-',
            d_sodiumValue: '-',
            d_totalCarbohydrateValue: '-',
            d_dietaryFiberValue: '-',
            d_totalSugerValue: '-',
            d_includeSugerValue: '-',
            d_ProtineValue: '-',
            d_vitaminDValue: '-',
            d_calciumValue: '-',
            d_ironValue: '-',
            d_potassiumValue: '-'
        }
    }

    newRespee = () => {
        this.setState({
            display: false,
            getDate: '',
            d_calories: '-',
            d_totalFat: '-',
            d_saturatedFat: '-',
            d_transFat: '-',
            d_cholesterol: '-',
            d_sodium: '-',
            d_totalCarbohydrate: '-',
            d_dietaryFiber: '-',
            d_totalSuger: '-',
            d_includeSuger: '-',
            d_Protine: '-',
            d_vitaminD: '-',
            d_calcium: '-',
            d_iron: '-',
            d_potassium: '-',

            d_totalFatValue: '-',
            d_saturatedFatValue: '-',
            d_transFatValue: '-',
            d_cholesterolValue: '-',
            d_sodiumValue: '-',
            d_totalCarbohydrateValue: '-',
            d_dietaryFiberValue: '-',
            d_totalSugerValue: '-',
            d_includeSugerValue: '-',
            d_ProtineValue: '-',
            d_vitaminDValue: '-',
            d_calciumValue: '-',
            d_ironValue: '-',
            d_potassiumValue: '-'
        })
    }


    fetchData = () => {
        let input = this.state.getDate;
        //console.log(this.state.d_calories)

        fetch(`https://api.edamam.com/api/nutrition-data?app_id=8459c0fa&app_key=06448dd5d7faf1eb8867497974bd7d17&ingr=${input}`)
            .then(res => res.json())
            .then(json => {
                //                console.log(json)
                this.setState({
                    display:true,
                    d_calories: json.calories,
                    d_totalFat: json.totalDaily.FAT.quantity.toFixed(2) + " " + json.totalDaily.FAT.unit,
                    d_saturatedFat: json.totalDaily.FASAT.quantity.toFixed(2) + " " + json.totalDaily.FASAT.unit,
                    d_transFat: "-",
                    d_cholesterol: json.totalDaily.CHOLE.quantity.toFixed(2) + " " + json.totalDaily.CHOLE.unit,
                    d_sodium: json.totalDaily.NA.quantity.toFixed(2) + " " + json.totalDaily.NA.unit,
                    d_totalCarbohydrate: json.totalDaily.CHOCDF.quantity.toFixed(2) + " " + json.totalDaily.CHOCDF.unit,
                    d_dietaryFiber: json.totalDaily.FIBTG.quantity.toFixed(2) + " " + json.totalDaily.FIBTG.unit,
                    d_totalSuger: '',
                    d_includeSuger: '',
                    d_Protine: json.totalDaily.PROCNT.quantity.toFixed(2) + " " + json.totalDaily.PROCNT.unit,
                    d_vitaminD: json.totalDaily.VITD.quantity.toFixed(2) + " " + json.totalDaily.VITD.unit,
                    d_calcium: json.totalDaily.CA.quantity.toFixed(2) + " " + json.totalDaily.CA.unit,
                    d_iron: json.totalDaily.FE.quantity.toFixed(2) + " " + json.totalDaily.FE.unit,
                    d_potassium: json.totalDaily.K.quantity.toFixed(2) + " " + json.totalDaily.K.unit,

                    d_totalFatValue: json.totalNutrients.FAT.quantity.toFixed(2) + " " + json.totalNutrients.FAT.unit,
                    d_saturatedFatValue: json.totalNutrients.FASAT.quantity.toFixed(2) + " " + json.totalNutrients.FASAT.unit,
                    d_transFatValue: '',
                    d_cholesterolValue: json.totalNutrients.CHOLE.quantity.toFixed(2) + " " + json.totalNutrients.CHOLE.unit,
                    d_sodiumValue: json.totalNutrients.NA.quantity.toFixed(2) + " " + json.totalNutrients.NA.unit,
                    d_totalCarbohydrateValue: json.totalNutrients.CHOCDF.quantity.toFixed(2) + " " + json.totalNutrients.CHOCDF.unit,
                    d_dietaryFiberValue: json.totalNutrients.FIBTG.quantity.toFixed(2) + " " + json.totalNutrients.FIBTG.unit,
                    d_totalSugerValue: json.totalNutrients.SUGAR.quantity.toFixed(2) + " " + json.totalNutrients.SUGAR.unit,
                    d_includeSugerValue: '-Added Sugars',
                    d_ProtineValue: json.totalNutrients.PROCNT.quantity.toFixed(2) + " " + json.totalNutrients.PROCNT.unit,
                    d_vitaminDValue: json.totalNutrients.VITD.quantity.toFixed(2) + " " + json.totalNutrients.VITD.unit,
                    d_calciumValue: json.totalNutrients.CA.quantity.toFixed(2) + " " + json.totalNutrients.CA.unit,
                    d_ironValue: json.totalNutrients.FE.quantity.toFixed(2) + " " + json.totalNutrients.FE.unit,
                    d_potassiumValue: json.totalNutrients.K.quantity.toFixed(2) + " " + json.totalNutrients.K.unit,
                })
            })
    }

    render() {
        return (
            <div className="home__container">
                <img className='home__image' src={HomeImg} alt="asajh" />
                <div className="home__layoutItemContainer">
                    <h2 className='home__layoutItemContainerHeading'>Nutrition Analysis</h2>
                    <p className='home__layoutItemContainerPara'>Enter an ingredient list list for what you are cooking, like <span className='home__layoutItemContainerParaSpan'> "1 cup rice, 10 oz chickpeas"</span>, etc.</p>
                    <p className='home__layoutItemContainerPara'>Enter each ingredient on a new line. </p>
                    <div className="container">
                        <section className='section__1'>
                            <textarea value={this.state.getDate} onChange={(e) => { this.setState({ getDate: e.target.value }) }} className='home__layoutItemContainerTextfield' name="" cols="50" rows="10" ></textarea>
                            <div className='home__layoutItemContainerDiv'>
                                <button onClick={this.fetchData} className='home__layoutItemContainerBtn'>Analyze</button>
                                <button onClick={this.newRespee} className='home__layoutItemContainerBtn'>New recipe</button>
                            </div>
                        </section>
                        {this.state.display ?
                            <DiteChart
                                calories={this.state.d_calories}
                                totalFat={this.state.d_totalFat}
                                saturatedFat={this.state.d_saturatedFat}
                                transFat={this.state.d_transFat}
                                cholesterol={this.state.d_cholesterol}
                                sodium={this.state.d_sodium}
                                totalCarbohydrate={this.state.d_totalCarbohydrate}
                                dietaryFiber={this.state.d_dietaryFiber}
                                totalSuger={this.state.d_totalSuger}
                                includeSuger={this.state.d_includeSuger}
                                Protine={this.state.d_Protine}
                                vitaminD={this.state.d_vitaminD}
                                calcium={this.state.d_calcium}
                                iron={this.state.d_iron}
                                potassium={this.state.d_potassium}

                                totalFatValue={this.state.d_totalSugerValue}
                                saturatedFatValue={this.state.d_saturatedFatValue}
                                transFatValue={this.state.d_transFatValue}
                                cholesterolValue={this.state.d_cholesterolValue}
                                sodiumValue={this.state.d_sodiumValue}
                                totalCarbohydrateValue={this.state.d_totalCarbohydrateValue}
                                dietaryFiberValue={this.state.d_dietaryFiberValue}
                                totalSugerValue={this.state.d_totalSugerValue}
                                includeSugerValue={this.state.d_includeSugerValue}
                                ProtineValue={this.state.d_potassiumValue}
                                vitaminDValue={this.state.d_vitaminDValue}
                                calciumValue={this.state.d_calciumValue}
                                ironValue={this.state.d_ironValue}
                                potassiumValue={this.state.d_potassiumValue}
                            /> : ""
                        }

                    </div>
                </div>
                <footer className='footer'>
                    Created by HRishabh Gupta
                </footer>
            </div>
        )
    }
}
