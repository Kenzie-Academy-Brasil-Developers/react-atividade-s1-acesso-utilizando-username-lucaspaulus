import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("");
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="userArea">
                    <div className="user__container"> 
                        {isLoggedIn 
                            ? 
                            <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
                            : 
                            <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
                        }
                    </div> 
                </div>

            </header>
        </div>
    );
}

export default App;
