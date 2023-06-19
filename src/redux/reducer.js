const initvalue = {
    filters: {
        search: '',
        sort: 'All',
    },
    todoList: [
        {id: 1, name: 'Quet nha', completed: false}
    ]
}

const rootReducer = ( state = initvalue, action) => {
    switch (action.type) {
        case 'todoList/add':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            };
        case 'filters/completed':
            state.todoList.map(todo => {
                if(todo.id == action.id) {
                    todo.completed = action.payload
                }
            })
            return {
                ...state
            }
        case 'filters/sort':
            state.filters.sort = action.payload
            return {
                ...state,
            }
        case 'filters/search':
            state.filters.search = action.payload
            return {
                ...state
            }
        default:
            break;
    }
    return state;
}




export default rootReducer;