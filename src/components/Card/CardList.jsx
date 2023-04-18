import { CardItem } from './CardItem';
import React, { useState } from 'react';
import {
  CardListWrapper,
  LoadMoreButton,
  PaginationWrapper,
} from './CardItem.styled';

const PAGE_SIZE = 8;

export const CardList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / PAGE_SIZE);

  return (
    <CardListWrapper>
      {users.slice(0, currentPage * PAGE_SIZE).map(user => (
        <CardItem
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          user={user.user}
          tweets={user.tweets}
          followers={user.followers}
        />
      ))}
      {currentPage < totalPages && (
        <LoadMoreButton onClick={() => setCurrentPage(currentPage + 1)}>
          Load more
        </LoadMoreButton>
      )}
      <PaginationWrapper
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </CardListWrapper>
  );
};
