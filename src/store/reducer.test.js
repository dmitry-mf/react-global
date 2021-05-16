import { createReducer } from './'
import * as reducers from './reducers';
import { state as movieState } from './movies/state';
import { ACTIONS } from './movies/actions'

const reducer = createReducer(movieState, reducers.movies);
const createAction = (type, payload) => ({
  type,
  payload,
})

const initialState = {
  data: []
}

const moviesList = [
  {
    id: 1,
    name: '1',
    genres: [1,2],
    vote_average: 1.1
  },
  {
    id: 2,
    name: '2', 
    genres: [1],
    vote_average: 3
  },
  {
    id: 3,
    name: '3',
    genres: [3],
    vote_average: 0,
  }
]

describe('movies reducer', () => {
  it('should enrich data with movies', () => {
    expect(
      reducer(
        initialState,
        createAction(ACTIONS.SET_MOVIES, { data: moviesList })
      )
    ).toEqual({ data: moviesList })
  });

  it('should delete movie from store by id', () => {
    expect(
      reducer(
        { data: [moviesList[0]]},
        createAction(ACTIONS.DELETE_MOVIE, moviesList[0])
      )
    ).toEqual(initialState)
  });

  it('should update movie in list by id', () => {
    expect(
      reducer(
        { data: moviesList },
        createAction(ACTIONS.UPDATE_MOVIE_FIELDS, {id: 1, name: 'new name'})
      )
    ).toEqual({ data: [ {id: 1, name: 'new name'}, moviesList[1], moviesList[2]] })
  });

  it('should filter movies list by genre', () => {
    expect(
      reducer(
        { data: moviesList },
        createAction(ACTIONS.FILTER_MOVIES_BY_GENRE, [1])
      )
    ).toEqual({ data: [moviesList[0], moviesList[1]] })
  });

  it('should sort movie rating by rating', () => {
    expect(
      reducer(
        { data: moviesList },
        createAction(ACTIONS.FILTER_MOVIES_BY_RATING, {})
      )
    ).toEqual({ data: [moviesList[2], moviesList[0], moviesList[1]] })
  });

  it('should enrich genre filter', () => {
    expect(
      reducer(
        initialState,
        createAction(ACTIONS.SET_GENRE_FILTER, ['1'])
      )
    ).toEqual({ ...initialState, genreFilter: ['1'] })
  });

  it('should enrich sort by', () => {
    expect(
      reducer(
        initialState,
        createAction(ACTIONS.SET_SORT_BY, '1')
      )
    ).toEqual({ ...initialState, sortBy: '1' })
  });
});
