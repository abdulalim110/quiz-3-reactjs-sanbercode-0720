import React from 'react';
import axios from 'axios';
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            daftarMovie:[],
            edited:0
        }
    }
    componentDidMount(){
        axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res=>{
                const movie = res.data;
                this.setState({daftarMovie: movie});
                this.sortByRating();
            });
    }
    sortByRating(){
        const {daftarMovie} = this.state
        let newDaftarMovie = daftarMovie
        newDaftarMovie=daftarMovie.sort((a,b)=>parseInt(b.rating)-parseInt(a.rating))
        this.setState({
            daftarMovie: newDaftarMovie,
            edited:1
        })
    }
    render(){
        return(
            <div>
                <section>
                <h1>Daftar Film Film Terbaik</h1>
                <div id="article-list">
                { this.state.edited===1 && this.state.daftarMovie.map((movie) => {
                    return(
                    <div key={movie.id}>
                    <a href><h3>{movie.title}</h3></a>
                    <h4>Rating {movie.rating}<br/>
                    Durasi {movie.duration}<br/>
                    Genre {movie.genre}
                    </h4>
                    <p>
                        <b>deskripsi:</b> {movie.description}
                    </p><hr/>
                    </div>
                    )})
                }
                </div>
                </section>
                <footer>
                    <h5>copyright © 2020 by Sanbercode</h5>
                </footer>
            </div>
        );
    }
}
export default Home;