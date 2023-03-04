const fetchHandler = async (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(async (response) => {
        resolve(response);
      })
      .catch((err) => {
        reject();
      });
    }
  );
};

export default fetchHandler;