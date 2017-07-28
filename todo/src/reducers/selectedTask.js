export default (selectedTask = null, action) => {
  switch (action.type) {
    case 'TASKS_SELECTED':
      return action.payload;
    default:
      return selectedTask;
  }
};