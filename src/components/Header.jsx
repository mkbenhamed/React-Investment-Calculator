import Logo from "../assets/investment-calculator-logo.png"

export default function Header(){
    return <header id="header">
        <img src={Logo} alt="Money in the bag"/>
        <h1>Investment calculator</h1>
    </header>
}