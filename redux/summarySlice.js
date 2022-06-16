import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {current} from '@reduxjs/toolkit'


// import storage from 'redux-persist/lib/storage'

const initialState = {
    summary: {},
    bonuses: [],
    selected: {}
}

// export const postSummary = createAsyncThunk('posts/postReview', async () => {
//         return (await fetch(`${APICallUrl}/api/products`)).json();
//     }
// )

export const summaryReducer = createSlice({
    name: "summary",
    initialState,
    reducers: {
        setSummary: (state, action) => {
            state.summary = action.payload
        },
        setSelected: (state, action) => {
            state.selected = action.payload
        },
        setBonusProduct: (state, action) => {
            if (state.bonuses.length === 0) {
                state.bonuses.push(action.payload);
            } else if (state.bonuses.length > 0) {
                let elem = state.bonuses.find((el) => el.id === action.payload.id)
                let objIndex = state.bonuses.findIndex((obj => obj.id === action.payload.id));
                state.bonuses[objIndex] = action.payload;
                if (!elem) {
                    state.bonuses.push(action.payload);
                }
            }
            // storage.setItem('bonuses', JSON.stringify(state.bonuses));
        },
        deleteSummary: (state, action) => {
            state.bonuses = state.bonuses.filter(p => p.id !== action.payload.id)
            // storage.setItem('bonuses', JSON.stringify(state.bonuses));
        },
        toggle: (state, action) => {
            let a = {};
            a.cartPrice = Number(action.payload.price)
            a.cartPriceOld = Number(action.payload.old_price)
            a.count = 1
            state.selected = Object.assign(a, action.payload)
        },
        increment: (state) => {
            state.selected.cartPrice = state.selected.cartPrice + Number(state.selected.price)
            state.selected.cartPriceOld = state.selected.cartPriceOld + Number(state.selected.old_price)
            state.selected.count = ++state.selected.count;
        },
        decrement: (state) => {
            if (state.selected.count > 1) {
                state.selected.cartPrice = state.selected.cartPrice - Number(state.selected.price)
                state.selected.cartPriceOld = state.selected.cartPriceOld - Number(state.selected.old_price)
                state.selected.count -= 1;
            }
        },
        changePriceInput: (state, action) => {

            let value = Math.max(Number(1), Math.min(Number(999), Number(action.payload)));
            state.selected.count = value
            state.selected.cartPrice = value * Number(state.selected.price)
            state.selected.cartPriceOld = value * Number(state.selected.old_price)
        }
    },
})

export const {
    setSummary,
    setBonusProduct,
    deleteSummary,
    toggle,
    setSelected,
    increment,
    decrement,
    changePriceInput
} = summaryReducer.actions;
export const selectSummary = (state) => state.summary.summary;
export const selectBonuses = (state) => state.summary.bonuses;
export const selectSelected = (state) => state.summary.selected;
export default summaryReducer.reducer;