import { useState } from "react"
import "./style.css"
export default function GetUserComponent({ setUser, setIsLoggedIn }){
    const [userInput, setUserInput] = useState("")
    
    function handleLogin(){
        setUser(userInput)
        setIsLoggedIn(true)     
    }
    
    return(
        <form className="user-form" onSubmit={(event)=> handleLogin(event.preventDefault())}>
            <input type="text" 
            placeholder="insira seu nome" 
            value={userInput} 
            onChange={(event)=> setUserInput(event.target.value)}>
            </input>
            <button type="subimit">Acessar com o nome</button>
        </form>
    )
}