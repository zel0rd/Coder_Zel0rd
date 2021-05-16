import React from 'react';
import axios from "axios";
import Movie from "./Movie"

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async() => {
    const {data: { data: { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log(movies)
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    // setTimeout(() => {    
    //   this.setState({ isLoading: false })
    // }, 2000)

    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state
    // return <div>{isLoading ? "Loading..." : "We are ready" } </div>
    return (
      <section class="container">
      {isLoading 
      ? <div class="loader">
        <span class="loader__text">Loading...</span>
      </div>
      : movies.map(movie => (
          <Movie
            key = {movie.id}
            id = {movie.id}
            year = {movie.year}
            title = {movie.title}
            summary = {movie.summary}
            poster = {movie.medium_cover_image}
          />
        )
      )}
      </section>
    )
  }
}

export default App;

// fetch
// axios
// api-url : https://yts-proxy.now.sh/list_movies.json