import React from "react";
import "./PlayerSelected.css";

const PlayerSelected = (props) => {
  const selectedPlayer = props.selectedPlayer;
  const totalPrice = selectedPlayer.reduce(
    (total, player) => total + player.salary,
    0
  );
  return (
    <div>
      <h2 className="title">Club Team Summary</h2>
      <p className="playerCount">
        <b>Player Selected:</b>
        <b style={{ color: "red" }}> {selectedPlayer.length}</b>
      </p>
      <div className="playerBudget">
        <p>
          Total Budget:
          <b style={{ color: "red" }}> {totalPrice} BTD</b>
        </p>
        <p>Selected Player Name:</p>
        <ul>
          {selectedPlayer.map((player) => (
            <li key={player.id} className="shadow-sm p-3 mb-5 bg-body rounded">
              <p>{player.name}</p>
              <p>
                salary: <b>{player.salary} BDT</b>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerSelected;
