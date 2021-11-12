import axios from 'axios';
const IMAGEURL = 'https://api.unsplash.com/search/photos';
const IAMGE_KEY = 'Client-ID SzTRbrXPhpLhwOoyXv2CBFa4TBKKau0FV8Fd7HXN_2M';
export const getImageList = async (query) => {
    const { data } = await axios.get(IMAGEURL, {
        params: {
          query: query
        },
        headers: {
          Authorization: IAMGE_KEY
        }
      });

    return data;
}