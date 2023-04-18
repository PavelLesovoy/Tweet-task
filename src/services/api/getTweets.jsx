import axios from 'axios';

const baseURL = 'https://63b96a113329392049f2d95f.mockapi.io';

const instance = axios.create({ baseURL });

const getTweets = async () => {
  try {
    const data = await instance('/tweet/tweet');
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export { getTweets };
