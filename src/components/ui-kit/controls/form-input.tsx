import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { Input } from '@components';
const cx = cn.bind(styles);

export const FormInput: React.FC<{
    inputProps?: {},
    title: string,
}> = ({ inputProps, title }) => {

    const formInputCn = cx(
        'form-input',
        'form-input_dark',
    );

    const formTitle = cx(
        'text',
        'text_sm',
        'text_red',
        'text_bold',
        'padding-v_15px'
    );

    const formLabelCn = cx(
        'form-input-label',
        'margin-v_15px',
    );

    const formCn = cx(
        'form-control',
        'padding-v_10px',
    );

    return (
        <div className={formCn}>
            <label className={formLabelCn}>
                <span className={formTitle}>{title}</span>
                <Input classNames={formInputCn} props={inputProps} />
            </label>
        </div>
    )
}
