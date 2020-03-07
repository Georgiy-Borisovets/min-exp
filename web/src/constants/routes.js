export const routesByName = {
  home: '/',
  auth: '/auth',
  roteWithParams(param = ':param') {
    return `/prefix/${param}`;
  },
};

export default {
  routesByName,
};
