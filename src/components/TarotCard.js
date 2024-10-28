import React from "react";
import "../styles/Card.css";

const TarotCard = ({
  title,
  summary,
  long_description,
  type,
  source,
  employer,
  isFlipped,
  onHover,
  onClick,
}) => {
  const cardImage =
    type === "achievement"
      ? "./assets/tarot-card-1.svg"
      : "./assets/tarot-card-2.svg";

  return (
    <div
      className={`card ${type} ${isFlipped ? "is-flipped" : ""}`}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={cardImage} alt={`${type} Card`} />
        </div>
        <div className="card-back">
          <h2 className="card-title">{title}</h2>
          <h4 className="card-summary">{summary}</h4>
          <h5 className="card-source">
            {source}
            <span> | </span>
            {employer}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;