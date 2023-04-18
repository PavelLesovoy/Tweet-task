import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const PageNumber = styled.button`
  background: ${({ active }) => (active ? '#5CD3A8' : '#EBD8FF')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${({ active }) => (active ? '#5CD3A8' : '#ddd')};
  }
`;
