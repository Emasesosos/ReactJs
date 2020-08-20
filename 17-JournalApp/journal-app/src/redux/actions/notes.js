import { db } from "../../firebase/firebase-config";
import { types } from "../types/types";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {

    return async(dispatch, getState) => {

        const state = getState().auth;
        const { uid } = state;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        console.log(doc);
        dispatch(activeNote(doc.id, newNote));

    };

};

export const activeNote = (id, note) => {

    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    };

};

export const startLoadingNotes = (uid) => {

    return async(dispatch) => {

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));

    };

};

export const setNotes = (notes) => {

    return {
        type: types.notesLoad,
        payload: notes
    };

};