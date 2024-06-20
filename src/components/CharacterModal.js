import { useState, useEffect } from "react";

const CharacterModal = ({ character, onClose }) => {
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const fetchRandomImage = () => {
      const randomNum = Math.floor(Math.random() * 83) + 1;
      return `https://starwars-visualguide.com/assets/img/characters/${randomNum}.jpg`;
    };
    setRandomImage(fetchRandomImage());
  }, [character]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{character.name}</h2>
        <img
          className="character-image"
          src={randomImage}
          alt={character.name}
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
