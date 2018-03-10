import React from "react";
import "../../styles/App.scss";
import "./WordItem.scss";
import { SortableElement } from "react-sortable-hoc";

const WordItem = SortableElement(
  ({ value, winner, index, roundOver, thisAnswer }) => {
    if (roundOver) {
      return (
        <li className="list-item word-item">
          <div className="word-arrow">
            {winner ? (
              <p>{value}</p>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "0px 5px",
                  marginBottom: "5%"
                }}
              >
                <p
                  className="answer-arrow"
                  style={{
                    color: "#f66",
                    textDecoration: "line-through",
                    marginBottom: "0%"
                  }}
                >
                  {value}
                </p>
                <p className="answer-arrow">{thisAnswer}</p>
              </div>
            )}
          </div>
        </li>
      );
    } else {
      return (
        <li className="list-item word-item">
          <div className="word-arrow">
            <p>{value}</p>
          </div>
        </li>
      );
    }
  }
);

export default WordItem;
