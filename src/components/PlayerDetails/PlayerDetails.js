import React from "react";
import "./PlayerDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PlayerDetails = (props) => {
  const { img, name, role, country, category, salary } = props.data;
  return (
    <div className="playerDetails shadow-lg p-3 mb-5 bg-body rounded">
      <div>
        <img className="palyerImage" src={img} alt="" />
      </div>
      <div>
        <p>
          Name:<small className="player-name"> {name}</small>
        </p>
        <p>Role: {role}</p>
        <p>Country: {country}</p>
        <p>Category: {category}</p>
        <p>
          Salary: <b>{salary} BDT</b>
        </p>
        <button
          className="player-button"
          onClick={() => props.handleAddPlayer(props.data)}
        >
          <FontAwesomeIcon icon={faCheckCircle} /> select player
        </button>
      </div>
    </div>
  );
};

export default PlayerDetails;
