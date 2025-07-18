export const PaginationControls = ({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
  hasPrev,
  hasNext,
}) => {
  return (
    <div className='pagination-controls has-text-centered'>
      <div className='columns is-centered'>
        <div className='column'>
          <button
            onClick={prevPage}
            disabled={!hasPrev}
          >
            Anterior
          </button>
        </div>
        <div className='column'>
          <span>
            Página {currentPage + 1} de {totalPages}
          </span>
        </div>
        <div className='column '>
          <button
            onClick={nextPage}
            disabled={!hasNext}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
