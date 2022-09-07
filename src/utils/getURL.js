function getURL(path, config = {}) {
  const query = Object.entries(config).reduce((acc, current, index, array) => {
    return index === array.length - 1
      ? acc + `${current[0]}=${current[1]}`
      : acc + `${current[0]}=${current[1]}&`;
  }, "");
  return `${process.env.REACT_APP_ENDPOINT}/${path}?${query}`;
}

export default getURL;
