import styled from 'styled-components';

export const CardListWrapper = styled.ul`
  display: grid;
  grid-gap: 32px;
  justify-content: center;
  padding: 0;
  margin: 32px auto;
  grid-template-columns: repeat(auto-fill, 380px);
  list-style: none;
`;

export const Card = styled.li`
  position: relative;
  width: 380px;
  height: auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const PictureImg = styled.img`
  margin-top: 28px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  margin-top: -18px;
  justify-content: center;
  align-items: center;
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  & img.avatar {
    position: relative;
    z-index: 10;
    padding: 2px;
    border: 8px solid #ebd8ff;
    border-radius: 50%;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
  }
`;

export const CardTitles = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;

export const CardButton = styled.button`
  width: 196px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin: 26px auto;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

export const LoadMoreButton = styled.button`
  width: 196px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin: 26px auto;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 0 10px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #444;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #eee;
    }

    &:active {
      background-color: #ddd;
    }

    &:focus {
      outline: none;
    }

    &.active {
      border: 1px solid #2e75b6;
      color: #2e75b6;
      font-weight: bold;
      pointer-events: none;
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
`;
