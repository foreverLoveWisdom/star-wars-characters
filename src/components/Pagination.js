// Pagination.js
const Pagination = ({ currentPage, nextPage, prevPage, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(prevPage);
  };

  const handleNextPage = () => {
    onPageChange(nextPage);
  };

  return (
    <div className="pagination">
      {prevPage && (
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
      )}
      {nextPage && (
        <button onClick={handleNextPage} disabled={currentPage === nextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
