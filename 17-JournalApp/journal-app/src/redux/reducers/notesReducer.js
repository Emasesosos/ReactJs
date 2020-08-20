import { types } from "../types/types";

/*
    {
        notes: [],
        active: null/{
            id: '',
            title: '',
            body: '',
            imageUrl: '',
            date: 123456789
        }
    }
*/

const initialState = {
    notes: [],
    active: null
};

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        default:
            return state;
    }

};