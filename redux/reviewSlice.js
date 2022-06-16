import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {current} from '@reduxjs/toolkit'

const initialState = {
    item: {
        name: "",
        email: "",
        desc: "",
        image: [],
        rating: 5
    },
    modal: false,
    question: false
};


export const postReview = createAsyncThunk('posts/postReview', async (values) => {

        return (await fetch("https://www.prorepeater.com/api/addReview", {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            }
        })).json();

    }
)

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.item.name = action.payload;
        },
        changeEmail: (state, action) => {
            state.item.email = action.payload;
        },
        changeDesc: (state, action) => {
            state.item.desc = action.payload;
        },
        changeRating: (state, action) => {
            state.item.rating = action.payload;
        },
        openModalReview: (state, action) => {
            state.modal = !action.payload;
            state.item.name = "";
            state.item.email = "";
            state.item.desc = "";
            state.item.image = [];
            state.item.rating = 5;
            state.question = false;
        },
        openModalQuestion: (state, action) => {
            state.modal = !action.payload;
            state.item.name = "";
            state.item.email = "";
            state.item.desc = "";
            state.item.image = [];
            state.question = true;
        },
        addPost: (state, action) => {
            state.item.name = "";
            state.item.email = "";
            state.item.desc = "";
            state.item.image = [];
            state.item.rating = 5;
            state.modal = !action.payload;
        },
        uploadPhoto: (state, action) => {
            state.item.image = action.payload;
        }
    },
    extraReducers: {
        [postReview.pending]: (state, action) => {

        },
        [postReview.fulfilled]: (state, action) => {

        },
        [postReview.rejected]: (state, action) => {

        },
    }
});

export const {
    changeName,
    changeEmail,
    changeDesc,
    changeRating,
    openModalReview,
    openModalQuestion,
    addPost,
    uploadPhoto
} = reviewSlice.actions;

export const selectItem = (state) => state.review.item;
export const selectModal = (state) => state.review.modal;
export const selectQuestion = (state) => state.review.question;


export default reviewSlice.reducer;