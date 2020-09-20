import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    moives: []
  }
  getMovies = async () => {
    const api_url = "https://yts-proxy.now.sh/list_movies.json"
    const {data:{data:{movies}}} = await axios.get(api_url)
    console.log(movies)
    // const movies = await axios.get(api_url)
    // console.log(movies.data.data.movies)
    // console.log(movies.data.data.movies)
    
    this.setState({ movies, isLoading: false})
    // this.setState({movies:movies})
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; 
    return (
      <div>
        {isLoading 
          ? "Loading..."
          : movies.map(movie => (
            <Movie key={movie.id}/>
          ))
        }
        </div>
    );
  }
}


export default App;

// fetch
// axios
// api-url : https://yts-proxy.now.sh/list_movies.json