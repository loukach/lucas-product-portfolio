import React from "react";
import "../styles/Card.css";
import "../styles/Body.css";

function Modal({ card, onClose }) {
  if (!card) return null;

  const cardImage =
    card.type === "achievement"
      ? "/assets/tarot-card-1.svg"
      : "/assets/tarot-card-2.svg";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="relative flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "90vh",
        }}
      >
        <div
          className={`card ${card.type} is-flipped`}
          style={{
            height: "80vh",
            width: "calc(80vh * 0.6)", // Maintain card aspect ratio
            maxWidth: "90vw",
            margin: "0 auto",
          }}
        >
          <div className="card-inner" style={{ transform: "rotateY(180deg)" }}>
            <div className="card-front">
              <img
                src={cardImage}
                alt={`${card.type} Card`}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="card-back">
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: card.svg }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
