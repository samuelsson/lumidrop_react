import { TOGGLE_SIDEBAR_LEFT } from '../constants';

const initialState = {
    sidebarLeftVisible: true
};

export const toggleSidebarLeft = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR_LEFT:
            return Object.assign({}, state, { sidebarLeftVisible: !state.sidebarLeftVisible });
        default:
            return state;
    }
};