import React from 'react';
import { PaginationWrapper, PageNumber } from './Pagination.styled';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      {pageNumbers.map(number => (
        <PageNumber
          key={number}
          onClick={() => setCurrentPage(number)}
          active={currentPage === number}
        >
          {number}
        </PageNumber>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
