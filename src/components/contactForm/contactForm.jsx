import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './contactForm.module.css'

const INITIAL_STATE = {
    name: '',
    number: '',
};
 class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
    };

    state = {
        ...INITIAL_STATE,
    };

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset();
    };

    reset = () => {
        this.setState({...INITIAL_STATE});
    };

    render() {
        const {name, number} = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label className={css.label}>
                    Name
                    <input 
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                </label>
                <label className={css.label}>
                    Number
                    <input
                    className={css.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                </label>
                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </form>
        );
    }

 }

export default ContactForm;