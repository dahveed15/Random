import getLocationData from '../controllers/weather';
import getAccountData from '../controllers/account';

export default (app) => {
  app.post('/api/weather', getLocationData);
  app.post('/api/account', getAccountData);
};
