import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

export const fetchHeroes = createAsyncThunk(                    /* createAsyncThunk - создает удобный экшен-криейтор для работы с асинхронным кодом с полями pending, fulfilled, rejected, т.к. возвращает промис */
    'heroes/fetchHeroes',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes/");
    }
)

const heroesSlice = createSlice({                               /* createSlice объединяет в себе функционал createAction и createReducer */
    name: 'heroes',
    initialState: {
        heroes: [],
        heroesLoadingStatus: 'idle'
    },
    reducers: {
        heroesDeleteHero: (state, action) => {state.heroes = state.heroes.filter(item => item.id !== action.payload)},
        heroesAddHero: (state, action) => {state.heroes.push(action.payload)}
    },
    extraReducers: builder => {
        builder
            .addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus = 'loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                state.heroes = action.payload;
            })
            .addCase(fetchHeroes.rejected, state => {state.heroesLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {reducer, actions} = heroesSlice;                         /* т.к. createSlice возвращает {name, reducer, actions} */
export const {heroesDeleteHero, heroesAddHero} = actions;       /* экспортируем экшены */
export default reducer;                                         /* экспортируем по-умолчанию reducer */