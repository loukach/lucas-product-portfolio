import React, { useState } from "react";
import "../styles/Card.css";
import "../styles/Body.css";
import cardData from "../data/data";
import TarotCard from "./TarotCard";
import Modal from "./Modal";
import LinkedInIcon from "./LinkedInIcon";


const TarotLayout = () => {
  const [flippedCards, setFlippedCards] = useState(
    new Array(cardData.length).fill(false)
  );
  const [selectedCard, setSelectedCard] = useState(null); // New state for modal

  const handleCardHover = (index) => {
    setFlippedCards((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  
  return (
    <div className="deck-layout">
      <div className="App-header">
        <h1 className="text-4xl font-bold text-left mb-8 text-gray-800">
          Lucas' Product Portfolio
          <a
            href="https://www.linkedin.com/in/lucasgros"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 inline-block"
          >
            <LinkedInIcon />
          </a>
        </h1>
      </div>
      <div className="card-container">
        {cardData.map((card, index) => (
          <TarotCard
            key={index}
            title={card.title}
            summary={card.summary}
            long_description={card.long_description}
            source={card.source}
            employer={card.employer}
            type={card.type}
            isFlipped={flippedCards[index]}
            onHover={() => handleCardHover(index)}
            onClick={() => handleCardClick(card)} // Add click handler
          />
        ))}
      </div>

      {/* Add Modal */}
      {selectedCard && (
        <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
};

export default TarotLayout;
