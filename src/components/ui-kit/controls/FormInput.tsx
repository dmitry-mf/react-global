import React from "react";
import { FieldInputProps, FieldMetaProps } from 'formik';
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { Input } from '@components';
const cx = cn.bind(styles);

export const FormInput: React.FC<{
    title: string;
    field: FieldInputProps<any>;
    meta: FieldMetaProps<any>;
}> = ({ title, meta, field }) => {
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

    const validationErrorCn = cx(
        'form-validation-error',
        'padding-v_10px',
        'text_red',
        'text_md'
    )

    return (
        <div className={formCn}>
            <label className={formLabelCn}>
                <span className={formTitle}>{title}</span>
                {meta.touched && meta.error && (
                   <div className={validationErrorCn}>{meta.error}</div>
                )}
                <Input classNames={formInputCn} props={field} />
            </label>
        </div>
    )
}


