import { useEffect, useState } from 'react';
import Logo from '../../images/Logo.png';
import Picture from '../../images/picture2.png';

const {
  Card,
  LogoImg,
  PictureImg,
  AvatarWrapper,
  CardTitles,
  CardButton,
} = require('./CardItem.styled');

export const CardItem = ({ id, avatar, user, tweets, followers }) => {
  const [toggle, setToggle] = useState(
    localStorage.getItem(`toggle_${id}`) === 'true' ? true : false
  );
  const [follow, setFollow] = useState(
    parseInt(localStorage.getItem(`follow_${id}`)) || followers
  );

  useEffect(() => {
    localStorage.setItem(`toggle_${id}`, toggle);
    localStorage.setItem(`follow_${id}`, follow);
  }, [id, toggle, follow]);

  const handleFollow = () => {
    setFollow(follow + (toggle ? -1 : 1));
    setToggle(!toggle);
    localStorage.setItem(`toggle_${id}`, !toggle);
  };

  return (
    <Card>
      <LogoImg src={Logo} alt="GoIT" width="76px" height="22px" />
      <PictureImg src={Picture} alt="" width="308px" height="168px" />
      <AvatarWrapper>
        <img
          className="avatar"
          src={avatar}
          alt={user}
          width="62px"
          height="62px"
        />
      </AvatarWrapper>
      <CardTitles>{user}</CardTitles>
      <CardTitles>{tweets} TWEETS</CardTitles>
      <CardTitles>{follow} FOLLOWERS</CardTitles>
      <CardButton
        type="button"
        onClick={handleFollow}
        style={{
          background: toggle ? '#5CD3A8' : '#EBD8FF',
        }}
      >
        {toggle ? 'Following' : 'Follow'}
      </CardButton>
    </Card>
  );
};
