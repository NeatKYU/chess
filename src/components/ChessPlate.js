import React from "react";
import "../chess.css";
import WhiteKing from "../image/KingWhite.png";
import WhiteQueen from "../image/QueenWhite.png";
import WhitePawn from "../image/PawnWhite.png";
import WhiteRook from "../image/RookWhite.png";
import WhiteKnight from "../image/KnightWhite.png";
import WhiteBishop from "../image/BishopWhite.png";
import BlackKing from "../image/KingBlack.png";
import BlackQueen from "../image/QueenBlack.png";
import BlackPawn from "../image/PawnBlack.png";
import BlackRook from "../image/RookBlack.png";
import BlackKnight from "../image/KnightBlack.png";
import BlackBishop from "../image/BishopBlack.png";

function ChessPlate() {
  return (
    <div className="chessplate">
      <div className="centersort">
        <div className="white plate">
          <img className="waresize" src={BlackRook} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={BlackKnight} />
        </div>
        <div className="white plate">
          <img className="waresize" src={BlackBishop} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={BlackQueen} />
        </div>
        <div className="white plate">
          <img className="waresize" src={BlackKing} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={BlackBishop} />
        </div>
        <div className="white plate">
          <img className="waresize" src={BlackKnight} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={BlackRook} />
        </div>
      </div>
      <div className="centersort">
        <div className="gray plate">
          <img className="waresize" src={BlackPawn} />
        </div>
        <div className="white plate">
          <img className="waresize" src={BlackPawn} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={BlackPawn} />
        </div>
        <div className="white plate">
          <img className="waresize" src={BlackPawn} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={BlackPawn} />
        </div>
        <div className="white plate">
          <img className="waresize" src={BlackPawn} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={BlackPawn} />
        </div>
        <div className="white plate">
          <img className="waresize" src={BlackPawn} />
        </div>
      </div>
      <div className="centersort">
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
      </div>
      <div className="centersort">
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
      </div>
      <div className="centersort">
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
      </div>
      <div className="centersort">
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
        <div className="gray plate"></div>
        <div className="white plate"></div>
      </div>
      <div className="centersort">
        <div className="white plate">
          <img className="waresize" src={WhitePawn} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={WhitePawn} />
        </div>
        <div className="white plate">
          <img className="waresize" src={WhitePawn} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={WhitePawn} />
        </div>
        <div className="white plate">
          <img className="waresize" src={WhitePawn} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={WhitePawn} />
        </div>
        <div className="white plate">
          <img className="waresize" src={WhitePawn} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={WhitePawn} />
        </div>
      </div>
      <div className="centersort">
        <div className="gray plate">
          <img className="waresize" src={WhiteRook} />
        </div>
        <div className="white plate">
          <img className="waresize" src={WhiteKnight} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={WhiteBishop} />
        </div>
        <div className="white plate">
          <img className="waresize" src={WhiteQueen} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={WhiteKing} />
        </div>
        <div className="white plate">
          <img className="waresize" src={WhiteBishop} />
        </div>
        <div className="gray plate">
          <img className="waresize" src={WhiteKnight} />
        </div>
        <div className="white plate">
          <img className="waresize" src={WhiteRook} />
        </div>
      </div>
    </div>
  );
}

export default ChessPlate;
