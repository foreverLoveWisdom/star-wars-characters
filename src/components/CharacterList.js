import { useState } from "react";
import CharacterModal from "./CharacterModal";

export default function CharacterList({ characters }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleModalClose = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="character-list">
      {characters.map((character) => (
        <div
          key={character.name}
          className="character-card"
          onClick={() => handleCardClick(character)}
        >
          {character.name}
        </div>
      ))}

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
