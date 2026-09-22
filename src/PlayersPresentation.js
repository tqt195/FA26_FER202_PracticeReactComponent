import React, { useState } from "react";

export default function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState([]);

  return (
    <div className="container">
      <div class="row g-3">
        {players.map((player) => (
          <div className="col-4" key={player.id}>
            <div className="card">
              <img src={player.img} alt="" />
              <h3>{player.name}</h3>
              <p className="title"></p>
              <p>
                <button
                  onClick={() => {
                    setPlayer(player);
                  }}
                >
                  <a href="#popup1" id="openPopUp">
                    Detail
                  </a>
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} alt="" />
          <h2>{player.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}
