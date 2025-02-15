import css from './Contact.module.css';
import { ImUser, ImPhone } from 'react-icons/im';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contact}>
      <div>
        <p>
          <ImUser /> {name}
        </p>
        <p>
          <ImPhone /> {number}
        </p>
      </div>
      <button className={css.contactDelete} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
