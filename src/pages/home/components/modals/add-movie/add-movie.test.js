import '@testing-library/jest-dom'
import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DialogForm, AddMovieModal } from './AddMovieModal';
import { ModalHeader, ModalFooter, ModalContent } from '@components';
import * as services from '../../../../../services';

jest.mock('../../../../../services');

describe('add movie dialog form tests', () => {
    it('should send form with correct form values', async () => {
        const handleSubmit = jest.fn();
        const handleDecline = jest.fn();

        render(<DialogForm handleConfirm={handleSubmit} closeModal={handleDecline}/>);

        userEvent.type(screen.getByLabelText(/Title/i), 'name');
        userEvent.type(screen.getByLabelText(/Release date/i), '01.01.2021');
        userEvent.type(screen.getByLabelText(/Movie url/i), 'https://example.com');
        userEvent.type(screen.getByLabelText(/Genre/i), 'adventure');
        userEvent.type(screen.getByLabelText(/Overview/i), 'any');
        userEvent.type(screen.getByLabelText(/Runtime/i), '106');
      
        userEvent.click(screen.getByRole('button', { name: /submit/i }))

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                title: 'name',
                date: '01.01.2021',
                url: 'https://example.com',
                genre: 'adventure',
                overview: 'any',
                runtime: '106',
            }, expect.anything())
        )
    });

    it('should reset form values', async () => {
        const handleSubmit = jest.fn();
        const handleClose = jest.fn();

        render(<DialogForm handleConfirm={handleSubmit} closeModal={handleClose}/>);

        userEvent.type(screen.getByLabelText(/Title/i), 'name');
        userEvent.type(screen.getByLabelText(/Release date/i), '01.01.2021');
        userEvent.type(screen.getByLabelText(/Movie url/i), 'https://example.com');
        userEvent.type(screen.getByLabelText(/Genre/i), 'adventure');
        userEvent.type(screen.getByLabelText(/Overview/i), 'any');
        userEvent.type(screen.getByLabelText(/Runtime/i), '106');
      
        userEvent.click(screen.getByRole('button', { name: /reset/i }));


        expect(screen.getByTestId('add-movie-form')).toHaveFormValues({
            title: '',
            date: '',
            url: '',
            genre: '',
            overview: '',
            runtime: '',
        });
    });

    it('dialog should be closed', async () => {
        const handleSubmit = jest.fn();
        const handleClose = jest.fn();

        render(<DialogForm handleConfirm={handleSubmit} closeModal={handleClose}/>);
      
        userEvent.click(screen.getByTestId('close'));

        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});


describe('dialog content tests', () => {
    it('should render dialog header', () => {
        render(<ModalHeader title={'any'}/>);
        const text = screen.getByText("any");
        expect(text).toBeInTheDocument();
    });

    it('should render dialog content', () => {
        render(<ModalContent>content</ModalContent>);
        const text = screen.getByText("content");
        expect(text).toBeInTheDocument();
    });

    it('should render dialog footer', () => {
        const declineFn = jest.fn();
        const confirmFn = jest.fn();

        render(<ModalFooter 
            onDecline={declineFn}
            onConfirm={confirmFn}
            confirmContent={'submit'}
            declineContent={'reset'}
        />);

        const submitText = screen.getByText("submit");
        const resetText = screen.getByText("reset");

        userEvent.click(screen.getByTestId('decline-btn'));
        userEvent.click(screen.getByTestId('confirm-btn'));

        expect(submitText).toBeInTheDocument();
        expect(resetText).toBeInTheDocument();
        expect(declineFn).toHaveBeenCalledTimes(1);
        expect(confirmFn).toHaveBeenCalledTimes(1);
    });
})

describe('add movie modal test', () => {
    it('is service mock called', () => {
        services.HomeService.createMovie = jest.fn();
        services.HomeService.createMovie()
        expect(services.HomeService.createMovie).toHaveBeenCalledTimes(1);
    })

    it('should appear url validation message', async () => {
        const closeModalFn = jest.fn();

        render(<AddMovieModal closeModal={closeModalFn}/>);

        userEvent.type(screen.getByLabelText(/Movie url/i), 'example.com');
        userEvent.click(screen.getByTestId('confirm-btn'));

        await waitFor(() =>
            {
                const text = screen.getByText("url must be a valid URL");
                return expect(text).toBeInTheDocument();
            }
        );
    });

    it('should appear date validation message', async () => {
        const closeModalFn = jest.fn();

        render(<AddMovieModal closeModal={closeModalFn}/>);

        userEvent.type(screen.getByLabelText(/Release date/i), '-');
        userEvent.click(screen.getByTestId('confirm-btn'));

        await waitFor(() =>
            {
                const text = screen.getByText("insert correct date");
                return expect(text).toBeInTheDocument();
            }
        );
    });
})