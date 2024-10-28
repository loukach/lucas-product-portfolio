import React, { useState } from "react";
import "../styles/Card.css";
import "../styles/Body.css";
import cardData from "../data/data";

const TarotCard = ({
  title,
  summary,
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
      className={`tarot-card ${type} ${isFlipped ? "is-flipped" : ""}`}
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

// New Modal Component
const Modal = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      <div 
        className="relative flex items-center justify-center"
        onClick={e => e.stopPropagation()}
        style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          maxHeight: '90vh'  // Ensure it doesn't exceed viewport height
        }}
      >
        <div 
          className={`tarot-card ${card.type} is-flipped`} 
          style={{ 
            transform: 'scale(1.5)',  // Reduced from scale(2) to scale(1.5)
            height: '80vh',          // Set height relative to viewport
            width: 'auto',           // Maintain aspect ratio
            maxWidth: '90vw',        // Ensure it doesn't exceed viewport width
            margin: '0 auto'
          }}
        >
          <div className="card-inner" style={{ transform: 'rotateY(180deg)' }}>
            <div className="card-front">
              <img 
                src={card.type === 'achievement' ? '/assets/tarot-card-1.svg' : '/assets/tarot-card-2.svg'} 
                alt={`${card.type} Card`}
                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="card-back">
              <h2 className="card-title">{card.title}</h2>
              <h4 className="card-summary">{card.summary}</h4>
              <h5 className="card-source">{card.source}</h5>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 -mr-12 mt-4 text-white hover:text-gray-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};


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
    <div className="tarot-layout">
      <div className="App-header">
        <h1 className="text-4xl font-bold text-left mb-8 text-gray-800">
          Lucas' Product Portfolio
          <a
            href="https://www.linkedin.com/in/lucasgros"
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
      </div>
      <div className="tarot-card-container">
        {cardData.map((card, index) => (
          <TarotCard
            key={index}
            title={card.title}
            summary={card.summary}
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
