import {REQUEST_ADDED} from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case REQUEST_ADDED:
            return state.concat(action.payload);
    }

    return state;
}