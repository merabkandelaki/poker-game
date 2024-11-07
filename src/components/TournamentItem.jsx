import React from 'react';
import '../styles/TournamentItem.less';
import pin from "../assets/icons/pin.svg";
import time from "../assets/icons/time.svg";
import playersIcon from "../assets/icons/players.svg";
import tourneyIcon from "../assets/icons/tourney.svg";
import timedIcon from "../assets/icons/stopwatch.svg";
import rapidIcon from "../assets/icons/rapid.svg";
import freeRollIcon from "../assets/icons/freeRoll.svg";
import Button from './Button';

const TournamentItem = ({
  title,
  date,
  status,
  isPin,
  tag,
  titleColor,
  tourney,
  players,
  backgroundColor,
  isFreeRoll,
  isRapid,
  isTimed,
}) => (
  <div className="tournament-item" style={{ backgroundColor }}>
    <div className={`tournament-item-label tournament-item-label--${status}`}>
      <span>{status}</span>
    </div>
    <Button text={status === 'cancelled' ? 'cancelled' : 'join table'} />
    <div className="tournament-item-inner">
      <div className="tournament-item-header">
        {isPin && <img src={pin} alt="pin" />}
        <div className="tournament-item-tag">{tag}</div>
        {isTimed && <img src={timedIcon} />}
        {isRapid && <img src={rapidIcon} />}
        {isFreeRoll && <img src={freeRollIcon} />}
      </div>
      <h4 style={{ color: titleColor }}>{title}</h4>
      <div className="tournament-item-bottom">
        <div className="tournament-item-bottom-info">
          <img src={time} alt="time" />
          <span>{date}</span>
        </div>
        <div className="tournament-item-bottom-info">
          <img src={playersIcon} alt="players" />
          <span>{players}</span>
        </div>
        <div className="tournament-item-bottom-info">
          <img src={tourneyIcon} alt="tourney" />
          <span>{tourney}</span>
        </div>
      </div>
    </div>
  </div>
);

export default TournamentItem;
