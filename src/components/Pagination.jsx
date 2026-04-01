function Pagination({ page, totalResults, onPageChange, isLoading = false }) {
  const totalPages = Math.ceil(totalResults / 10);
  const endPage = Math.min(totalPages, Math.max(5, page + 2));
  const startPage = Math.max(1, endPage - 4);
  const visiblePages = [];

  for (let currentPage = startPage; currentPage <= endPage; currentPage += 1) {
    visiblePages.push(currentPage);
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination_container">
      <button
        className="pagination_btn"
        disabled={page === 1 || isLoading}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          className={`pagination_btn pagination_page${pageNumber === page ? " active" : ""}`}
          onClick={() => onPageChange(pageNumber)}
          disabled={pageNumber === page || isLoading}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className="pagination_btn"
        disabled={page === totalPages || isLoading}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
