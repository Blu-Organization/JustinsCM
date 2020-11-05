import React from 'react';
import axios from 'axios';
import Game from './Game.jsx';

export default class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.getGames = this.getGames.bind(this);
  }

  componentDidMount() {
    this.getGames(this.props.type)
  }

  getGames(type) {
    axios.get(`/gamesList/${type}`)
      .then((results) => {
        this.setState({
          games: results.data
        })
      })
  }

  render() {
    const { games } = this.state;
    const { handleClick } = this.props;
    const GameBlocks = games.map((game) => {
      return <Game key={game.ID} game={game} handleClick={handleClick} />
    })

    return (
      <div>
        {GameBlocks}
      </div>
    );
  }
}