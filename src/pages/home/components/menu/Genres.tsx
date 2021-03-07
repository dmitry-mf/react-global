import React from 'react';
import { List, ListItem, Link } from '@components';

export type Genre = 'all' | 'documentary' | 'comedy' | 'horror' | 'crime';

export const HomeGenres: React.FC<{genresList: Array<Genre>}> = ({genresList}) => {
    const handleClick = () => {};
    const linkProps = {onClick: handleClick};
    return (
        <List>
            {genresList.map(genre => (
                <ListItem key={genre}>
                    <Link active={genre === 'all'} params={linkProps}>{genre}</Link>
                </ListItem>
            ))}
        </List>
    )
}