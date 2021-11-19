const BASE_URL = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0';

const axiosOptions = ({ method, url }) => ({
  method: method,
  url: url
});

const services = {
  TODOLIST: `${BASE_URL}/to-do-list`,
  axiosOptions
};

export default services;
