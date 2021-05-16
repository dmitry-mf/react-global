import '@testing-library/jest-dom'
import * as React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import { ConfirmationDialog } from '@components';
import { useModal } from './useModal';
import * as context from '../context';

jest.mock('../context', () => ({
    useDialogContext: jest.fn(),
    useDialogDispatch: jest.fn(),
    DialogContainer: jest.fn(() => (<></>))
}));

describe('show modal hook test', () => {
    it('is service mock called', () => {

        const { result } = renderHook(() => useModal('test_confirmation_dialog', ConfirmationDialog));

        const [ openFn, RenderFn, closeFn, state ] = result.current;

        const dialogSettings = {
            DialogContent: () => (<>Test dialog content</>),
            dialogTitle: 'Test dialog title',
            onConfirm: jest.fn(),
        };

        render(
            <context.DialogContainer>
                <div id="dialog-root"></div>
                <RenderFn {...dialogSettings}/>
            </context.DialogContainer>
        );

        expect(state).toBeFalsy();
    })
})