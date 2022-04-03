import "./style.css"
export default function WelcomePage({ user, setIsLoggedIn}){
    function handleLogout(){
      
        return setIsLoggedIn(false)
    }
    return(
        <div className="user-logged">
            <h1>Bem-vindo&#40;a&#41;, {user}!</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}