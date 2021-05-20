import React from "react";

class BMICalculator extends React.Component {
    constructor() {
        super();
        this.state = {
            height: "",
            weight: "",
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.results = this.results.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    results(e) {
        e.preventDefault();
        const BMI_Unadjusted = this.state.weight * 703 / Math.pow(this.state.height, 2);
        const BMI = BMI_Unadjusted.toFixed(1);

        if (BMI < 18.5) 
            this.setState({value: "Your BMI is " + BMI + " which indicates that your weight is in the Underweight category."})
        else if (BMI > 18.5 && BMI < 24.9)
            this.setState({value: "Your BMI is " + BMI + " which indicates that your weight is in the Normal category."})
        else if (BMI > 24.9 && BMI < 29.9)
            this.setState({value: "Your BMI is " + BMI + " which indicates that your weight is in the Overweight category."})
        else 
            this.setState({value: "Your BMI is " + BMI + " which indicates that your weight is in the Obese category."})
    }

    render() {
        return(
            <div>
                <form className="bmiForm" onSubmit={this.results}>
                    Height(Inches): <input className="height"
                        type="number"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    required/>
                    <br />

                    Weight(Pounds): <input className="weight"
                        type="number"
                        name="weight"
                        value={this.state.weight}
                        onChange={this.handleChange}
                    required/>
                    <br />

                    <button className="button">Calculate</button>

                    <h1>{this.state.value}</h1>
                </form>
            </div>
        )
    }
}

export default BMICalculator;