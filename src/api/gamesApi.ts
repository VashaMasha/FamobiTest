import fetchHandler from './fetchHandler';

const gamesApi = {
  getGames: fetchHandler('https://www.freetogame.com/api/gamesimport'),
};

export default gamesApi;
