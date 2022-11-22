import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
};

const heroesSlice = createSlice({            /* createSlice объединяет в себе функционал createAction и createReducer */
    name: 'heroes',
    initialState,
    reducers: {
        heroesFetching: state => {state.heroesLoadingStatus = 'loading'},
        heroesFetched: (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        heroesFetchingError: state => {state.heroesLoadingStatus = 'error'},
        heroesDeleteHero: (state, action) => {state.heroes = state.heroes.filter(item => item.id !== action.payload)},
        heroesAddHero: (state, action) => {state.heroes.push(action.payload)}
    }
});

const {reducer, actions} = heroesSlice;      /* т.к. createSlice возвращает {name, reducer, actions} */

export const {                               /* экспортируем экшены */
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroesDeleteHero,
    heroesAddHero
} = actions;

export default reducer;                     /* экспортируем по-умолчанию reducer */