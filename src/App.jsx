import React from 'react';
import Spinner from './components/Spinner';
import PlayerInfo from './components/PlayerInfo';
import Loader from './components/Loader';
import TournamentItem from './components/TournamentItem';
import { tournaments } from './data/tournaments';
import './styles/App.less';

const App = () => (
  <div className="app">
    <h1>Poker</h1>
    <Spinner />
    <PlayerInfo />
    <Loader progress={70} />

    <div className="tournament-list">
      {tournaments.map((tournament, index) => (
        <TournamentItem
          key={index}
          title={tournament.title}
          date={tournament.date}
          location={tournament.location}
          status={tournament.status}
          isPin={tournament.isPin}
          tag={tournament.tag}
          titleColor={tournament.titleColor}
          players={tournament.players}
          tourney={tournament.tourney}
          backgroundColor={tournament.backgroundColor}
          isTimed={tournament?.isTimed}
          isRapid={tournament?.isRapid}
          isFreeRoll={tournament?.isFreeRoll}
        />
      ))}
    </div>
  </div>
);

export default App;
