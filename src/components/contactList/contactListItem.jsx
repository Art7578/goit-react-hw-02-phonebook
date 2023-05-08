import PropTypes from 'prop-types';
import css from './contactList.module.css'

export default function ContactListItem({id, name, number, onDelete}) {
    return (
        <li className={css.item}>
            <p className={css.text}>
                {name}: {number}
            </p>
            <button 
            type="button"
            className={css.button}
            onClick={() => onDelete(id)}
            >Delete
            </button>
        </li>
    );
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
};