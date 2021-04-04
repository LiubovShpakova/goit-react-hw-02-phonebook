// import PropTypes from "prop-types";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={style.contact} key={id}>
            {name}: {number}
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={style.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
export default ContactList;
