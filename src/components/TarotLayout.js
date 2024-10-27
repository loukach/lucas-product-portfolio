import React, { useState } from 'react';
import '../styles/Card.css';
import cardData from '../data/data';

const TarotCard = ({ title, summary, type, source, isFlipped, onHover }) => {
  const cardImage = type === 'achievement' 
    ? '/assets/tarot-card-1.svg' 
    : '/assets/tarot-card-2.svg';

  return (
    <div 
      className={`tarot-card ${type} ${isFlipped ? 'is-flipped' : ''}`} 
      onMouseEnter={onHover}
    >
      <div className="card-inner">
        <div className="card-front">
          <img 
            src={cardImage} 
            alt={`${type} Card`}
          />
        </div>
        <div className="card-back">
          <h2 className="card-title">{title}</h2>
          <h4 className="card-summary">{summary}</h4>
          <h5 className="card-source">{source}</h5>
        </div>
      </div>
    </div>
  );
};

const TarotLayout = () => {
  const [flippedCards, setFlippedCards] = useState(
    new Array(cardData.length).fill(false)
  );

  const handleCardHover = (index) => {
    setFlippedCards(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="tarot-layout">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Lucas Gros' Product Portfolio 
      </h1>
      <div className="tarot-card-container">
        {cardData.map((card, index) => (
          <TarotCard
            key={index}
            title={card.title}
            summary={card.summary}
            source={card.source}
            type={card.type}
            isFlipped={flippedCards[index]}
            onHover={() => handleCardHover(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TarotLayout;