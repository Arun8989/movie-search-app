function Pagination({ page, onPageChange }) {

  return (

    <div className="pagination_container">

      <button
        className="pagination_btn"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </button>

      <span className="pagination_page">
        Page {page}
      </span>

      <button
        className="pagination_btn"
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>

  );

}

export default Pagination;