import axios from 'axios';

const getActivityList = async () => {
  const listTodo = await axios.get(
    'https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io',
  );

  return listTodo.data;
};

const getTodoList = async (id: number) => {
  const listTodo = await axios.get(
    `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`,
  );

  return listTodo.data;
};

const getDetailTodo = async (id: number) => {
  const listTodo = await axios.get(
    `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
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

const createTodo = async ({
  id,
  title,
  priority,
}: {
  id: string;
  title: string;
  priority: string;
}) => {
  const listTodo = await axios.post('https://todo.api.devcode.gethired.id/todo-items', {
    activity_group_id: id,
    title: title,
    priority: priority,
  });

  return listTodo.data;
};

const editTodo = async ({
  id,
  title,
  priority,
}: {
  id: string;
  title: string;
  priority: string;
}) => {
  const listTodo = await axios.patch(
    `https://todo.api.devcode.gethired.id/todo-items/${id}`,
    {
      title: title,
      priority: priority,
    },
  );

  return listTodo.data;
};

const updateTodoStatus = async ({ id, is_active }: { id: string; is_active: number }) => {
  const listTodo = await axios.patch(
    `https://todo.api.devcode.gethired.id/todo-items/${id}`,
    {
      is_active: is_active,
    },
  );

  return listTodo.data;
};

const updateTitleDetail = async ({ id, title }: { id: number; title: string }) => {
  const listTodo = await axios.patch(
    `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
    {
      title: title,
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

const deleteTodo = async (id: number) => {
  const listTodo = await axios.delete(
    `https://todo.api.devcode.gethired.id/todo-items/${id}`,
  );

  return listTodo;
};

export const activityServices = {
  getActivityList,
  getTodoList,
  editTodo,
  createTodo,
  updateTitleDetail,
  updateTodoStatus,
  getDetailTodo,
  createActivity,
  deleteTodo,
  deleteActivity,
};
