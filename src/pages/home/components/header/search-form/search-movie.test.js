import '@testing-library/jest-dom'
import * as React from 'react';

import { render, screen } from '@testing-library/react';
import { SearchMovie } from './SearchMovie';

it('render search movie component', () => {
    render(<SearchMovie />);
    const text = screen.getByText("find your movie");
    expect(text).toBeInTheDocument();
});