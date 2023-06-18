export const addTodoAction = (data) =>  {
    return {
        type: 'todoList/add',
        payload: data
    }
}
export const changeStatusJobs = (data) => {
    return {
        type: 'filters/completed',
        id: data.id,
        payload: data.completed,
    }
}