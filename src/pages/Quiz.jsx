import React from "react";
import Answers from "./Answers";
import MiniPlayer from "./MiniPlayer";
import ProgessBar from "./ProgessBar";

const Quiz = () => {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgessBar />
      <MiniPlayer />
    </div>
  );
};

export default Quiz;
