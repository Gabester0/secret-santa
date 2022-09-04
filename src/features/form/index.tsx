import React from 'react';
import { setValue, selectValue } from './formSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { FormWrapper } from './styled';

export const Form = () => {
    const value = useAppSelector(selectValue);
    const dispatch = useAppDispatch();

    return (
        <FormWrapper>
            <label>Name</label>
            <input 
                type="text"
                value={value}
                onChange={(e) => dispatch(setValue(e.target.value))}
                placeholder="Jo jo"
            />
        </FormWrapper>
    )
}