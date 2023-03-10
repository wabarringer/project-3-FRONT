import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home/style.css";
import chessboardHome from "../../../img/chessboard-home.png";

const Home = ({ roomId, isLoggedIn, socket, username }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

// Attach a user to their specified room key
  const [joinRoom, setJoinRoom] = useState("");

  const joinByRoomId = (e) => {
    e.preventDefault();
    socket.emit("join", { roomId, username });
    navigate(`/room/${roomId}`);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setJoinRoom(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(joinRoom);
    socket.emit("join", { roomId: joinRoom, username });
    navigate(`/room/${joinRoom}`);
  };

  return (
    <section>
      <div className="column">
        <div className="box">
          <div>
            <img src={chessboardHome} alt="chessboard with pawn" />
          </div>
          <div id="hostRoomDiv" onClick={joinByRoomId}>
            <button>HOST A ROOM</button>
          </div>
        </div>

        <div className="box">
          <div>
            <img src={chessboardHome} alt="chessboard with a pawn" />
          </div>
          <div id="joinFormDiv">
            <form onSubmit={onSubmitHandler}>
              <input
                type="number"
                value={joinRoom}
                id="fname"
                placeholder="Room ID"
                onChange={handleInputChange}
              />
              <button type="submit">JOIN A ROOM</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
