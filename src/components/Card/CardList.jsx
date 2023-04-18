import { CardItem } from './CardItem';
import React from 'react';
import { CardListWrapper } from './CardItem.styled';

export const CardList = ({ users }) => {
  return (
    <CardListWrapper>
      {users.map(user => (
        <CardItem
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          user={user.user}
          tweets={user.tweets}
          followers={user.followers}
        />
      ))}
    </CardListWrapper>
  );
};
