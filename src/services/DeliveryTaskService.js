import Client from './Client';

export const taskStarted = async (id) => {
  return await Client.post('/deliverytask/pickup?id=' + id)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log('Error ========>', error);
    });
};

export const taskCompleted = async (id) => {
  return await Client.post('/deliverytask/deliver?id=' + id)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log('Error ========>', error);
    });
};
