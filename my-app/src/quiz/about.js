import React from 'react';
function About(){
    return (
        <div>
            <style>
                {
                    `footer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        background-color: black;
                        color: white;
                        height: 50px;
                        bottom: 0;
                        justify-content: center;
                        align-items: center;
                    }`
                }
            </style>
        <div style={{padding: '100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}>
                <h1 style={{textAlign: 'center'}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li><strong style={{width: '100px'}}>Nama:</strong> Evelyn Tjitrodjojo</li> 
                    <li><strong style={{width: '100px'}}>Email:</strong> Marsella.eve@gmail.com</li> 
                    <li><strong style={{width: '100px'}}>Sistem Operasi yang digunakan:</strong> Windows</li>
                    <li><strong style={{width: '100px'}}>Akun Gitlab:</strong> github.com/Marsellaeve</li> 
                    <li><strong style={{width: '100px'}}>Akun Telegram:</strong> Marsellaeve</li> 
                </ol>
            </div>
        </div>
            <footer>
                <h5>copyright © 2020 by Sanbercode</h5>
            </footer>
        </div>
    );
}
export default About;