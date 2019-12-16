import { createStore } from 'redux'

const initState = {
    currentPage: "home"
}

const reducer = (state = initState, action) => {

    if (action.type === 'CHANGE_CURRENTPAGE') {

        return {
           ...state,
            currentPage: action.data.currentPage
        }

    }

    

    return state
}

const store = createStore(reducer)

export default store