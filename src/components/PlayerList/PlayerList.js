import React, { useState, useEffect } from "react";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import fakedata from "../../fakeData/data.json";
import "./PlayerList.css";
import PlayerSelected from "../PlayerSelected/PlayerSelected";

const PlayerList = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(fakedata);
  }, []);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const handleAddPlayer = (props) => {
    const newSelectedPlayer = [...selectedPlayer, props];
    setSelectedPlayer(newSelectedPlayer);
  };
  return (
    <div className="playerList-container">
      <div className="playerDetails-container">
        {data.map((data) => (
          <PlayerDetails
            data={data}
            key={data.id}
            handleAddPlayer={handleAddPlayer}
          ></PlayerDetails>
        ))}
      </div>
      <div className="playerSelected-container">
        <PlayerSelected selectedPlayer={selectedPlayer}></PlayerSelected>
      </div>
    </div>
  );
};

export default PlayerList;
