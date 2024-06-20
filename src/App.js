import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${currentPage}`
        );
        setData(response.data);
      } catch (err) {
        console.error("App Error: ", err, "\n\n\n");
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main">
      {data ? (
        <>
          <CharacterList characters={data.results} />
          <Pagination
            currentPage={currentPage}
            nextPage={data.next ? parseInt(data.next.split("=")[1]) : null}
            prevPage={
              data.previous ? parseInt(data.previous.split("=")[1]) : null
            }
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
