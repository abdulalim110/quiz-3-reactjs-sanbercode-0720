import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DaftarMovie = () => {
    const[daftarMovie,setDaftarMovie]=useState(null);
    const[inputTitle,setInputTitle]=useState("")
    const[inputDescription,setInputDescription]=useState("")
    const[inputYear,setInputYear]=useState("")
    const[inputDuration,setInputDuration]=useState("")
    const[inputGenre,setInputGenre]=useState("")
    const[inputRating,setInputRating]=useState("")
    const[selectedId,setSelectedId]=useState(0)
    const[statusForm,setStatusForm]=useState("create")
    
    useEffect(()=>{
        if(daftarMovie===null){
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res=>{
                setDaftarMovie(res.data.map(el=>{return{id:el.id,title:el.title,description:el.description,year:el.year,duration:el.duration,genre:el.genre,rating:el.rating}}))
            })
        }
    },[daftarMovie])
    const handleEdit = (event) => {
        let idMovie=parseInt(event.target.value);
        let movie=daftarMovie.find(x=>x.id===idMovie)
        setInputTitle(movie.title)
        setInputDescription(movie.description)
        setInputYear(movie.year)
        setInputDuration(movie.duration)
        setInputGenre(movie.genre)
        setInputRating(movie.rating)
        setSelectedId(idMovie)
        setStatusForm("edit")
    }
    const handleDelete=(event)=>{
        let idMovie=parseInt(event.target.value);
        let newDaftarMovie=daftarMovie.filter(el=>el.id!==idMovie)
        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idMovie}`)
        .then(res=>{
            console.log(res);
        })
        setDaftarMovie([...newDaftarMovie]);
    }
    const handleChange1=(event)=>{
        setInputTitle(event.target.value);
    }
    const handleChange2=(event)=>{
        setInputDescription(event.target.value);
    }
    const handleChange3=(event)=>{
        setInputYear(event.target.value);
    }
    const handleChange4=(event)=>{
        setInputDuration(event.target.value);
    }
    const handleChange5=(event)=>{
        setInputGenre(event.target.value);
    }
    const handleChange6=(event)=>{
        setInputRating(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(inputTitle.replace(/\s/g,'')!==""){
            if(statusForm==="create"){
                axios.post(`http://backendexample.sanbercloud.com/api/movies`,{
                    title:inputTitle,
                    description:inputDescription,
                    year:inputYear,
                    duration:inputDuration,
                    genre:inputGenre,
                    rating:inputRating
                })
                .then(res=>{
                    setDaftarMovie([...daftarMovie,{id:res.data.id,title:inputTitle,description:inputDescription,year:inputYear,duration:inputDuration,genre:inputGenre,rating:inputRating}]);
                    console.log(res);
                })
            }
            else if(statusForm==="edit"){
                axios.put(`http://backendexample.sanbercloud.com/api/movies/${selectedId}`,{
                    title:inputTitle,
                    description:inputDescription,
                    year:inputYear,
                    duration:inputDuration,
                    genre:inputGenre,
                    rating:inputRating})
                .then(res=>{
                    let dataMovie=daftarMovie.find(el=>el.id === selectedId)
                    dataMovie.title=inputTitle
                    dataMovie.description=inputDescription
                    dataMovie.year=inputYear
                    dataMovie.duration=inputDuration
                    dataMovie.genre=inputGenre
                    dataMovie.rating=inputRating
                    setDaftarMovie([...daftarMovie])
                })
            }
            setStatusForm("create")
            setSelectedId(0)
            setInputTitle("")
            setInputYear("")
            setInputRating("")
            setInputGenre("")
            setInputDuration("")
            setInputDescription("")
        }
    }
    return(
        <div>
            <style>
                {`
                div{
                    padding-left:2px;
                    font-family:serif;
                }
                table{
                    border: 1px solid black;
                    width: 1000px;
                    margin-left: auto;
                    margin-right: auto;
                }
                th {
                    background-color: #aaaaaa;
                }
                td {
                    background-color: skyblue;
                }
                form{
                    text-align:left;
                }
                textarea {
                    font-family: serif;
                    margin-left:100px;
                    width: 80%;
                    height: 150px;
                    padding: 12px 20px;
                    box-sizing: border-box;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    background-color: #f8f8f8;
                    resize: none;
                }
                label{
                    margin-left:100px;
                }
                input{
                    font-family: serif;
                    margin-left:100px;
                    width: 80%;
                    height: 10px;
                    padding: 12px 20px;
                    box-sizing: border-box;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    background-color: #f8f8f8;
                    resize: none;
                }
                h1{text-align:center;}`}
            </style>
            <h1 style={{paddingTop:"80px"}}>Tabel Daftar Film</h1>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Year</th>
                    <th>Duration (menit)</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Aksi</th>
                </tr>
        {
            daftarMovie!==null && daftarMovie.map((item)=>{
                return(
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.year}</td>
                        <td>{item.duration}</td>
                        <td>{item.genre}</td>
                        <td>{item.rating}</td>
                        <td>
                            <button onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
        </table>
        {/* Form */}
        <div style={{paddingLeft: '100px',paddingRight: '100px',paddingTop: '50px',paddingBottom:'100px'}}>
            <div style={{border:'1px solid black',backgroundColor:'white'}}>    
                    <h1>Form Data Film</h1>
                <form onSubmit={handleSubmit}>
                    <label>Masukkan Title : </label><br/>
                    <input type="text" value={inputTitle} onChange={handleChange1}/><br/><br/>
                    <label>Masukkan Description : </label><br/>
                    <textarea value={inputDescription} onChange={handleChange2}/><br/><br/>
                    <label>Masukkan Year : </label><br/>
                    <input type="number" value={inputYear} onChange={handleChange3}/><br/><br/>
                    <label>Masukkan Duration (dalam menit) : </label><br/>
                    <input type="number" value={inputDuration} onChange={handleChange4}/><br/><br/>
                    <label>Masukkan Genre : </label><br/>
                    <input type="text" value={inputGenre} onChange={handleChange5}/><br/><br/>
                    <label>Masukkan Rating : </label><br/>
                    <input type="number" min="1" max="10" value={inputRating} onChange={handleChange6}/><br/><br/>
                    <button style={{marginLeft:'100px',marginBottom:'50px'}}>submit</button>
                </form>
            </div>
        </div>
            <footer>
                <h5>copyright © 2020 by Sanbercode</h5>
            </footer>
        </div>
    )
}
export default DaftarMovie;