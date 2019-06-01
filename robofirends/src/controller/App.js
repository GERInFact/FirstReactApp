import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchField from "../components/SearchField";
import Scroll from "../components/Scroll";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { robots: [], searchField: "" };
    this.onSearchfieldChange = event => {
      this.setState({ searchField: event.target.value });
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => this.setState({ robots: res }));
  }

  render() {
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchField key="search" searchField={this.onSearchfieldChange} />
        <Scroll>
          <CardList
            robots={this.state.robots.filter(r =>
              r.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase())
            )}
          />
        </Scroll>
      </div>
    );
  }
}

export default App;
