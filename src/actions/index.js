export const GET_USER = 'GET_USER';

export const getUser = () => (dispatch) => (
  fetch('some-url')
    .then((response) => response.json())
    .then((user) => (dispatch({type: GET_USER, user})))
);
