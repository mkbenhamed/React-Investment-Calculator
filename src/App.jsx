import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1600,
    expectedReturn: 6,
    duration: 10
})

const validInput = userInput.duration >= 1


function hundleChange(inputIdentifier, newValue){
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier] : +newValue
        }
    })
}
  return (
    <>
      <Header/>
      <UserInput input={userInput} onChange={hundleChange}/>
      {!validInput && <p className="center">Please enter a duration greater than zero.</p>}
      {validInput && <Results UserInputs={userInput}/>}
    </>

  )
}

export default App
