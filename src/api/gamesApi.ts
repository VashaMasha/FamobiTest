import fetchHandler from './fetchHandler';

const gamesApi = {
  getGames: () => fetchHandler('https://www.freetogame.com/api/games'),
};

export default gamesApi;
