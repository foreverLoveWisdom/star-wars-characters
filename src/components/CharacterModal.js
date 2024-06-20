import { useState, useEffect } from "react";

const TOTAL_CHARACTERS = 83;

const CharacterModal = ({ character, onClose }) => {
  const [randomImage, setRandomImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  const fetchRandomImage = () => {
    const randomNum = Math.floor(Math.random() * TOTAL_CHARACTERS) + 1;
    return `https://starwars-visualguide.com/assets/img/characters/${randomNum}.jpg`;
  };

  useEffect(() => {
    setRandomImage(fetchRandomImage());
  }, [character]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{character.name}</h2>
        <p style={{ display: isLoading ? "block" : "none" }}>
          Loading image...
        </p>
        <img
          className="character-image"
          src={randomImage}
          alt={character.name}
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={() => setIsLoading(false)} // Set loading to false when image has loaded
          onError={() => setIsLoading(false)} // Also set loading to false if there was an error loading the image
        />
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
