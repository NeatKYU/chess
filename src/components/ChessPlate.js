import React from "react";
import "../chess.css";

const chessArray = [];

function ChessPlate() {
  return (
    <div className="chessplate">
      <div className="centersort">
        <div className="white plate">a8</div>
        <div className="gray plate">b8</div>
        <div className="white plate">c8</div>
        <div className="gray plate">d8</div>
        <div className="white plate">e8</div>
        <div className="gray plate">f8</div>
        <div className="white plate">g8</div>
        <div className="gray plate">h8</div>
      </div>
      <div className="centersort">
        <div className="gray plate">a7</div>
        <div className="white plate">b7</div>
        <div className="gray plate">c7</div>
        <div className="white plate">d7</div>
        <div className="gray plate">e7</div>
        <div className="white plate">f7</div>
        <div className="gray plate">g7</div>
        <div className="white plate">h7</div>
      </div>
      <div className="centersort">
        <div className="white plate">a6</div>
        <div className="gray plate">b6</div>
        <div className="white plate">c6</div>
        <div className="gray plate">d6</div>
        <div className="white plate">e6</div>
        <div className="gray plate">f6</div>
        <div className="white plate">g6</div>
        <div className="gray plate">h6</div>
      </div>
      <div className="centersort">
        <div className="gray plate">a5</div>
        <div className="white plate">b5</div>
        <div className="gray plate">c5</div>
        <div className="white plate">d5</div>
        <div className="gray plate">e5</div>
        <div className="white plate">f5</div>
        <div className="gray plate">g5</div>
        <div className="white plate">h5</div>
      </div>
      <div className="centersort">
        <div className="white plate">a4</div>
        <div className="gray plate">b4</div>
        <div className="white plate">c4</div>
        <div className="gray plate">d4</div>
        <div className="white plate">e4</div>
        <div className="gray plate">f4</div>
        <div className="white plate">g4</div>
        <div className="gray plate">h4</div>
      </div>
      <div className="centersort">
        <div className="gray plate">a3</div>
        <div className="white plate">b3</div>
        <div className="gray plate">c3</div>
        <div className="white plate">d3</div>
        <div className="gray plate">e3</div>
        <div className="white plate">f3</div>
        <div className="gray plate">g3</div>
        <div className="white plate">h3</div>
      </div>
      <div className="centersort">
        <div className="white plate">a2</div>
        <div className="gray plate">b2</div>
        <div className="white plate">c2</div>
        <div className="gray plate">d2</div>
        <div className="white plate">e2</div>
        <div className="gray plate">f2</div>
        <div className="white plate">g2</div>
        <div className="gray plate">h2</div>
      </div>
      <div className="centersort">
        <div className="gray plate">a1</div>
        <div className="white plate">b1</div>
        <div className="gray plate">c1</div>
        <div className="white plate">d1</div>
        <div className="gray plate">e1</div>
        <div className="white plate">f1</div>
        <div className="gray plate">g1</div>
        <div className="white plate">h1</div>
      </div>
    </div>
  );
}

export default ChessPlate;
