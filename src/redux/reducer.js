const initvalue = {
    filters: {
        search: '',
        status: 'All',
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
            return {
                ...state,
                ...state.todoList.map(
                    (todo) => {
                       if( todo.id === action.id) {
                        todo.completed = action.payload
                       }
                    }
                )
            }
        default:
            break;
    }

    console.log({state});
    return state;
}




export default rootReducer;