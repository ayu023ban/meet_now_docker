export const apiDispatch = (actionType = "", data) => {
  return {
    type: actionType,
    payload: data,
  };
};

export const apiError = (errType) => (error) => {
  return {
    type: errType,
    error,
  };
};

export const getUrlFromCode = (code) => {
  const baseUrl = window.location;
  const url = new URL(`/room/${code}/`, baseUrl);
  return url;
};

export const getUniqueArray = (array, key) => {
  const result = [];
  const map = new Map();
  for (const item of array) {
    if (!map.has(item[key])) {
      map.set(item[key], true); // set any value to Map
      result.push({ ...item });
    }
  }
  return result;
};
