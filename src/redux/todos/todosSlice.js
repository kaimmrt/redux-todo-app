import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        colors: [
            { color: 'green', colorCode: '#aed581' },
            { color: 'blue', colorCode: '#4fc3f7' },
            { color: 'yellow', colorCode: '#fbd54e' },
            { color: 'purple', colorCode: '#ba68c8' },
            { color: 'red', colorCode: '#ee6292' },
        ],
        activeColor: '#aed581',
        textFilter: "",
        items: [

        ],
    },

    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: nanoid(),
                title: action.payload,
                colorCode: state.activeColor
            })
        },
        changeActiveColor: (state, action) => {
            state.activeColor = action.payload
        },
        filterText: (state, action) => {
            state.textFilter = action.payload
        },
        destroy: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter((item) => item.id != id)
            state.items = filtered;
        }
    }
})

export const { changeActiveColor, addTodo, filterText, destroy } = todosSlice.actions;
export default todosSlice.reducer;