import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import { v4 as uuidv4 } from "uuid";
import "./JokesList.css";

class JokesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawnJokes: [],
    };
    this.getJoke = this.getJoke.bind(this);
  }

  // async componentDidMount() {

  // }

  async getJoke() {
    const fetchJoke = await axios.get("https://icanhazdadjoke.com/slack");

    const joke = fetchJoke.data.attachments[0].text;
    // console.log(joke);

    this.setState((st) => ({
      drawnJokes: [
        ...st.drawnJokes,
        {
          text: joke,
          id: uuidv4(),
        },
      ],
    }));

    // console.log(fetchJoke.data);
  }

  // Because it renders 'render()' first than 'componentDidMount()', we can see the 'Loading...' text.
  render() {
    const jokes = this.state.drawnJokes.map((j) => (
      <Joke newJoke={j.text} key={j.id} />
    ));

    if (this.state.jokes !== "") {
      return (
        <div className="JokeList">
          <h1>Dad Jokes</h1>

          <button onClick={this.getJoke}>Get Joke !</button>
          <ul className="JokeList-ul">{jokes}</ul>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default JokesList;
