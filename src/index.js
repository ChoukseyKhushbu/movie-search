import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./components/SearchMovies";
// import "../css/styles.css";
import Card from "./components/Card";
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    setMovies = (movie) => this.setState({ data: movie });
    render() {
        return (
            <div className="container">
                <h1 className="title">React Movie Search</h1>
                <SearchMovies setMovies={this.setMovies} />
                <div className="card-list">
                    {this.state.data.filter((movie) => movie.poster_path).map((m) => <Card movie={m} key={m.id} />)}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));