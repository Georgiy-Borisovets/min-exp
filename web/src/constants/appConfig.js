const appConfig = {
  isDev: process.env.NODE_ENV === 'development',
  apiUrl: process.env.REACT_APP_API_URL,
  DEFAULT_LANGUAGE: 'en',
};

export default appConfig;
