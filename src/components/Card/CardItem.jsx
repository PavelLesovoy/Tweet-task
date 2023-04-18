import { useEffect, useState } from 'react';
import Logo from '../../images/Logo.png';
import Picture from '../../images/picture2.png';
import { getTweets } from '../../services/api/getTweets';

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
    async function fetchData() {
      const tweetsData = await getTweets();
      const currentUser = tweetsData.find(tweet => tweet.id === id);
      setFollow(currentUser.followers);
      setToggle(currentUser.isFollowing);
      localStorage.setItem(`toggle_${id}`, currentUser.isFollowing);
      localStorage.setItem(`follow_${id}`, currentUser.followers);
    }
    fetchData();
  }, [id]);

  const handleFollow = () => {
    setFollow(follow + (toggle ? -1 : 1));
    setToggle(!toggle);
    localStorage.setItem(`toggle_${id}`, !toggle);
    localStorage.setItem(`follow_${id}`, follow + (toggle ? -1 : 1));
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
