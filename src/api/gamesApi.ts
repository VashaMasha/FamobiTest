import fetchHandler from './fetchHandler';

const gamesApi = {
  getGames: (platform: string, category: string, sortBy: string) => fetchHandler(`https://www.freetogame.com/api/games?${platform ? `platform=${platform}` : ''}&${category ? `category=${category}` : ''}&${category ? `sort-by=${sortBy}` : ''}`),
};

export default gamesApi;
