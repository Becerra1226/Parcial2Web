import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Pagina anterior
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Pagina siguiente
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
