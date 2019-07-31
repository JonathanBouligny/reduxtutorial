import { FETCH_POSTS, NEW_POST} from '../actions/types'

const initialState = {
    items: [], //posts that come in from our action (fetch posts)
    item: {} //represents the single post that we add (add posts)
}

export default function ( state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state; 
    }
}