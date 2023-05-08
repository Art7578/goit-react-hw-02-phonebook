import PropTypes from 'prop-types';
import ContactListItem from './contactListItem';
import css from './contactList.module.css'

export default function ContactList({contacts, onDeleteConact}) {
    return (
        <ul className={css.list}>
            {contacts.map(({id, name, number}) => (
                <ContactListItem
                    name={name}
                    number={number}
                    key={id}
                    id={id}
                    onDelete={onDeleteConact}
                />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteConact: PropTypes.func,
};
