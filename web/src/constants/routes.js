export const routesByName = {
  home: '/',
  login: '/login',
  signUp: '/sign-up',
  roteWithParams(param = ':param') {
    return `/prefix/${param}`;
  },
};

export default {
  routesByName,
};
