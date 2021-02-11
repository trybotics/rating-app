import {
    SET_RATING_LIST,
    SET_RATING_DETAILS,
} from "../actions/ActionTypes";
const initialState = {
    ratingList: [],
    ratingDetails: {}
}

const companyReducer = (state = initialState, action) => {
    let localState = Object.assign({}, state);
    switch (action.type) {
        case SET_RATING_LIST:
            localState.ratingList = action.ratingList.length > 0 ? action.ratingList : localState.ratingList;
            return localState;
        case SET_RATING_DETAILS:
            localState.ratingDetails = action.ratingDetails;
            return localState;
        default:
            return state;
    }
}

export default companyReducer;