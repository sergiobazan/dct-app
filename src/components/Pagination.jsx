import classNames from "classnames";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { range } from "../utils/range";

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

export const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pageCount = Math.ceil(total / limit);
  const pages = range(1, pageCount);

  const onPreviousPage = () => {
    if (currentPage - 1 > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < pageCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={onPreviousPage}>
        <AiOutlineLeft />
      </button>
      <ul className="pagination">
        {pages.map((page) => (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
      </ul>
      <button onClick={onNextPage}>
        <AiOutlineRight />
      </button>
    </div>
  );
};
