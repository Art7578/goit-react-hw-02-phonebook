import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css'


const Filter = ({value, onChange}) => (
    <div className={css.box}>
        <label>
            Find contacts by name
            <input type="text" value={value} onChange={onChange}/>
        </label>
    </div>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};
export default Filter;