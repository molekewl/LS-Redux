export const selectedTask = (todos) => {
  return {
    type: 'TASKS_SELECTED',
    payload: todos
  };
};