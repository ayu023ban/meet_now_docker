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
