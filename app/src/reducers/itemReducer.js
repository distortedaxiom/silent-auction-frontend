import _ from 'lodash';
import {
    CREATE_ITEM,
    FETCH_ITEM,
    FETCH_ITEMS,
    EDIT_ITEM,
    DELETE_ITEM
} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ITEMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_ITEM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_ITEM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_ITEM: 
            console.log(state);
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_ITEM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}