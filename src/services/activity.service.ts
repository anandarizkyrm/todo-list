import axios from 'axios';

const getActivityList = async () => {
  const listTodo = await axios.get(
    'https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io',
  );

  return listTodo.data;
};

const createActivity = async () => {
  const listTodo = await axios.post(
    'https://todo.api.devcode.gethired.id/activity-groups',
    {
      title: 'Testing 1',
      email: 'yoga+1@skyshi.io',
      _comment:
        'email digunakan untuk membedakan list data yang digunakan antar aplikasi',
    },
  );

  return listTodo.data;
};

const deleteActivity = async (id: number) => {
  const listTodo = await axios.delete(
    `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
  );

  return listTodo;
};

export const activityServices = {
  getActivityList,
  createActivity,
  deleteActivity,
};
