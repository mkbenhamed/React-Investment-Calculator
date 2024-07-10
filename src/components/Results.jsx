import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({UserInputs}){
    const resultsData = calculateInvestmentResults(UserInputs)
    const inisitialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>   
                <th>Investment Value</th> 
                <th>Intrest (Year)</th> 
                <th>Total Intrest</th> 
                <th>Invested Capital</th>         
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearData => {
                
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - inisitialInvestment
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}