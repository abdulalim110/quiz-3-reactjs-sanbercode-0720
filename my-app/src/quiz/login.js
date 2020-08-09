import React, { useContext}  from 'react';
import { LoginContext } from "./LoginContext";
import { useHistory } from "react-router-dom";
const Login=()=>{
    const history = useHistory();
    const [login,setLogin]=useContext(LoginContext);
    const handleSubmit=(event)=>{
        event.preventDefault();
        setLogin("sudah");
        console.log(login);
        history.push("/");
    }
    return (
        <div>
            <style>
                {`input{
                    font-family: serif;
                    width: 80%;
                    height: 20px;
                    padding: 12px 20px;
                    box-sizing: border-box;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    background-color: #f8f8f8;
                    resize: none;
                }
                .button {
                    background-color: #1c87c9;
                    border: none;
                    color: white;
                    padding: 20px 34px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 20px;
                    margin: 4px 2px;
                    cursor: pointer;
                `}
            </style>
        <div style={{padding: '100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}>
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <form>
                <ol>
                    <li><strong style={{width: '100px'}}>Username: </strong></li> 
                    <input type="text"/><br/><br/>
                    <li><strong style={{width: '100px'}}>Email: </strong></li> 
                    <input type="text"/><br/><br/>
                    <button  onClick={handleSubmit}>Submit</button>
                    
                </ol>
                </form>
            </div>
        </div>
            <footer>
                <h5>copyright © 2020 by Sanbercode</h5>
            </footer>
        </div>
    );
}
export default Login;