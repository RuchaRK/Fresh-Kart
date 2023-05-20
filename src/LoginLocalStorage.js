const LOGIN_TOKEN_KEY = 'token';

export const setloginToken = (token) => {
  localStorage.setItem(LOGIN_TOKEN_KEY, token);
};

export const getLoginToken = () => localStorage.getItem(LOGIN_TOKEN_KEY);

export const clearLoginToken = () => {
  localStorage.removeItem(LOGIN_TOKEN_KEY);
};
