import { combineReducers } from 'redux'
import Rating from './Rating'
const reducer = combineReducers({
    ratingState: Rating,
})

export default reducer;