import React from "react";
import ReactDOM from "react-dom";

import { useDialogDispatch, useDialogContext } from '../context';

const Container = document.getElementById("dialog-root");

type AbstractModalProps = any;

export const useModal = (
    name: string,
    Modal: React.FC<AbstractModalProps>,
    settings = {},
): any =>  {
    const state = useDialogContext(name);
    const dispatch = useDialogDispatch();

    const openModal = React.useCallback(() => {
        window.document.body.style.overflow = 'hidden';
        dispatch({ name, isOpen: true });
    }, [state]);

    const closeModal = React.useCallback(() => {
        window.document.body.style.overflow = 'auto';
        dispatch({ name, isOpen: false });
    }, [state]);

    const Dialog = () => state ? ReactDOM.createPortal(
        <Modal {...settings} openModal={openModal} closeModal={closeModal}/>,
        Container) : <></>;

    return [
        openModal,
        Dialog,
        closeModal,
        state,
    ]
}