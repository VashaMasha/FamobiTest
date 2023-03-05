const fetchHandler = async (url: string) => new Promise((resolve, reject) => {
  fetch(url)
    .then(async (response) => {
      const res = parseResponse(response);
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    });
});

const parseResponse = async (response: Response) => {
  try {
    const responseJSON = await response.json();
    return responseJSON;
  } catch (err) {
    console.log('Cannot parse body from response');
    return false;
  }
};
export default fetchHandler;
