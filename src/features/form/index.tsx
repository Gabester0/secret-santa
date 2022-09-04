import React from 'react';
import { setValue, selectValue } from './formSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export const Form = () => {
    const value = useAppSelector(selectValue);
    const dispatch = useAppDispatch();

    return (
        <div>
            <label>Name</label>
            <input 
                type="text"
                value={value}
                onChange={(e) => dispatch(setValue(e.target.value))}
                placeholder="Jo jo"
            />
        </div>
    )
}