import React, { useContext } from "react";
import{Switch,Link,Route,useHistory} from "react-router-dom";
import "./style.css";
import Logo from './logo.png';
import Style from './style.css';
import Login from './login';
import Home from "./home";
import About from "./about";
import DaftarMovie from "./movieListEditor";
import { LoginContext } from "./LoginContext";

const Routes = () =>{
    const [login]=useContext(LoginContext);
    
    const history = useHistory();
    history.push("/");
    console.log(login);
    return(
        <>
            <link href={Style} rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" />
                <header>
                <img id="logo" src={Logo} width="200px" alt="logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    {
                        login==="sudah" &&                    
                        <li>
                            <Link to="/MovieListEditor">Movie List Editor</Link>
                        </li>
                    }
                    {
                        login==="belum"&&
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                    }
                </ul>
            </nav>
            </header>
            
      <Switch>
        <Route path="/About" component={About}/>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/MovieListEditor">
          <DaftarMovie />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
    )
}
export default Routes;