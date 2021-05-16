import '@testing-library/jest-dom'
import * as React from 'react';

import { render } from '@testing-library/react';
import { Counter } from './Counter';

it('render counter component', () => {
    const { asFragment } = render(<Counter count={2}/>);
    expect(asFragment()).toMatchSnapshot();
});