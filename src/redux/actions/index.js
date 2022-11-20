import { createAction } from "@reduxjs/toolkit";

// экшены для запросов на сервер:
export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
        request("http://localhost:3001/heroes/")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
        request("http://localhost:3001/filters/")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
}

// ГЕРОИ:
/* export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
} */
export const heroesFetching = createAction('HEROES_FETCHING');

/* export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
} */
export const heroesFetched = createAction('HEROES_FETCHED');

/* export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
} */
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
// УДАЛЕНИЕ И ДОБАВЛЕНИЕ:
/* export const heroesDeleteHero = (id) => {
    return {
        type: 'HEROES_DELETE_HERO',
        payload: id
    }
} */
export const heroesDeleteHero = createAction('HEROES_DELETE_HERO');

/* export const heroesAddHero = (hero) => {
    return {
        type: 'HEROES_ADD_HERO',
        payload: hero
    }
} */
export const heroesAddHero = createAction('HEROES_ADD_HERO');

// ФИЛЬТРЫ:
/* export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
} */
export const filtersFetching = createAction('FILTERS_FETCHING');

/* export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
} */
export const filtersFetched = createAction('FILTERS_FETCHED');

/* export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
} */
export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');

/* export const activeFilterChanged = (filter) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: filter
    }
} */
export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED');