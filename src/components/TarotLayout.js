import React, { useState } from 'react';
import '../styles/Card.css';
import cardData from '../data/data';

const TarotCard = ({ title, summary, type, source, isFlipped, onHover }) => {
  const cardImage = type === 'achievement' 
    ? './assets/tarot-card-1.svg' 
    : './assets/tarot-card-2.svg';

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
        <a 
          href="https://www.linkedin.com/in/lucas-gros" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-8 inline-block"
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            className="inline-block hover:text-blue-600"
          >
            <path 
              fill="currentColor" 
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
            />
          </svg>
        </a>
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