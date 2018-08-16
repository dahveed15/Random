import axios from 'axios';

const ACCOUNT_API_ROOT = 'https://haveibeenpwned.com';
const ACCOUNT_DATA_ENDPOINT = `${ACCOUNT_API_ROOT}/api/breachedaccount/`;

const getAccountData = async (req, res) => {
  const { account } = req.body;
  // res.send({ hi: `${ACCOUNT_DATA_ENDPOINT}${encodeURIComponent(account)}` });
  // console.log({ url: `${ACCOUNT_DATA_ENDPOINT}${encodeURIComponent(account)}` });
  const accountData = await axios
    .get(`${ACCOUNT_DATA_ENDPOINT}${encodeURIComponent(account)}`)
    .catch((err) => {
      console.log(err);
      res.send({ status: 'failed' });
      return;
    });
  console.log(accountData);
  // if (status !== 200) {
  //   console.log('Status code error');
  //   return;
  // }

  res.send({ accountInfo: {} });
};

export default getAccountData;
