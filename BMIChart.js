import React from "react";

function BMIChart() {
    return(
        <div className="bmiTable">
            <table> 
                <caption>BMI Chart</caption>
                <tr>
                    <th>BMI</th>
                    <th>Weight Status</th>
                </tr>
                <tr>
                    <td>Below 18.5</td>
                    <td>Underweight</td>
                </tr>
                <tr>
                    <td>18.5 - 24.9</td>
                    <td>Normal</td>
                </tr>
                <tr>
                    <td>25.0 - 29.9</td>
                    <td>Overweight</td>
                </tr>
                <tr>
                    <td>30.0 and Above</td>
                    <td>Obese</td>
                </tr>
            </table>
        </div>
    )
}

export default BMIChart;