import React from "react";
import cn from "classnames/bind";
import styles from '../../../styles/components/index.module.scss';
import { Input } from '../../../components';
const cx = cn.bind(styles);

export const FormDate: React.FC<{
    inputProps: {},
    title: string,
}> = ({ inputProps, title }) => {

    const formInputCn = cx(
        'form-input',
    );

    const formTitle = cx(
        'form-title',
    );

    const formLabelCn = cx(
        'form-label',
    );

    const formCn = cx(
        'form-control',
        'padding-v_15px',
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
