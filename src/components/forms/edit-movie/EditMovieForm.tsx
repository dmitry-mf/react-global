import React from "react";
import cn from "classnames/bind";
import styles from '@styles/components/index.scss';
import { FormInput,  } from '@components';
const cx = cn.bind(styles);

export const EditMovieForm: React.FC<{}> = () => {
    return (
        <>
            <FormInput title={'Title'}/>
            <FormInput title={'Release date'}/>
            <FormInput title={'Movie url'}/>
            <FormInput title={'Genre'}/>
            <FormInput title={'Overview'}/>
            <FormInput title={'Runtime'}/>
        </>
    )
}
