import {
    SET_RATING_LIST,
    SET_RATING_DETAILS,
} from "./ActionTypes";
import axios from 'axios';

const API = 'https://www.fakerestapi.com/datasets/api/v1/iphone-11-amazon-reviews.json'

export const getRatingList = () => {
    return (dispatch) => {
        let ratingList = [];
        dispatch(setRatingList(ratingList));
        return axios.get(API)
            .then(response => {
                ratingList = response.data.data
                ratingList.map((value, index) => {
                    ratingList[index]['id'] = index + 1
                    ratingList[index]['key'] = index + 1
                })
                dispatch(setRatingList(ratingList))
            })
            .catch(error => {
                dispatch(setRatingList(ratingList))
            });
    }
}
export const setRatingList = (ratingList) => {
    return {
        type: SET_RATING_LIST,
        ratingList: ratingList
    }
}

export const getRatingDetails = (id) => {
    return (dispatch) => {
        let ratingDetails = {};
        dispatch(setRatingDetails(ratingDetails));
        return axios.get(API)
            .then(response => {
                let ratingList = response.data.data
                for (var i = 0; i < ratingList.length; i++) {
                    if ((i + 1) === Number(id)) {
                        ratingDetails = ratingList[i]
                        ratingDetails['id'] = i + 1
                        ratingDetails['key'] = i + 1
                        break;
                    }
                }
                dispatch(setRatingList(ratingList))
                dispatch(setRatingDetails(ratingDetails))
            })
            .catch(error => {
                dispatch(setRatingDetails(ratingDetails))
            });
    }
}
export const setRatingDetails = (ratingDetails) => {
    return {
        type: SET_RATING_DETAILS,
        ratingDetails: ratingDetails
    }
}