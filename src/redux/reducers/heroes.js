import { createReducer } from "@reduxjs/toolkit"
import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroesDeleteHero,
    heroesAddHero
} from '../actions';

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroes = createReducer(initialState, builder => {
    builder
        .addCase(heroesFetching, state => {state.heroesLoadingStatus = 'loading'})
        .addCase(heroesFetched, (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;            
        })
        .addCase(heroesFetchingError, state => {state.heroesLoadingStatus = 'error'})
        .addCase(heroesDeleteHero, (state, action) => {state.heroes = state.heroes.filter(item => item.id !== action.payload)})
        .addCase(heroesAddHero, (state, action) => {state.heroes.push(action.payload)})
        .addDefaultCase(() => {})
})

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle',
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HEROES_DELETE_HERO':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== action.payload)
//             }
//         case 'HEROES_ADD_HERO':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }
//         default: return state
//     }
// }

export default heroes;