import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={s["contact-item"]}>
      <div className={s["contact-info"]}>
        <div className={s["contact-row"]}>
          <BsPersonFill />
          <p>{contact.name}</p>
        </div>
        <div className={s["contact-row"]}>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        className={s["delete-button"]}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
