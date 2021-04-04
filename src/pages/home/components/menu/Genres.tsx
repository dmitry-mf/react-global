import React, { Dispatch, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Link } from '@components';
import { setGenreFilter } from '../../../../store/movies/actions';
import { getGenreFilter } from '../../../../store/movies/selectors';

export type Genre = 'all' | 'documentary' | 'comedy' | 'horror' | 'crime';

export const GenreListItem: React.FC<{genre: Genre, filter: string[]}> = ({ genre, filter }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const setStoreGenreFilter = useCallback(() => {
        dispatch(setGenreFilter([ genre ]));
    }, []);

    const linkProps = useMemo(() => ({ onClick: setStoreGenreFilter }), []);

    const isActive = useMemo(() => {
        return filter.includes(genre);
    }, [filter]);

    return (
        <ListItem key={genre}>
            <Link active={isActive} params={linkProps}>{genre}</Link>
        </ListItem>
    )
}

export const HomeGenres: React.FC<{genresList: Array<Genre>}> = ({genresList}) => {
    const filter = useSelector(getGenreFilter);

    return (
        <List>
            {genresList.map(genre => (
                <GenreListItem filter={filter} genre={genre} key={genre}/>
            ))}
        </List>
    )
}