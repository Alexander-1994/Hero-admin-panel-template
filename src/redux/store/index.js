// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { stringMiddleware } from '../customMiddlewares'; 
import heroes from '../../components/heroesList/heroesSlice';
import filters from '../../components/heroesFilters/filtersSlice';

/* const store = createStore(
                combineReducers({heroes, filters}),                                                
                compose(                                                                           
                    applyMiddleware(ReduxThunk, stringMiddleware),                                                   
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())); */

const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware=> getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;