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
export const sortJobs = (data) => {
    return {
        type: 'filters/sort',
        payload: data.choose,
    }
}
export const searchJob = (data) => {
    return {
        type: 'filters/search',
        payload: data.search,
    }
}