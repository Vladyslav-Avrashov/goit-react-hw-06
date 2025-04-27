import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const initialValues = { name: "", number: "" };

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s["form-box"]}>
        <label htmlFor={nameId}>Name</label>
        <Field id={nameId} name="name" type="text" />
        <ErrorMessage name="name" component="span" style={{ color: "red" }} />

        <label htmlFor={numberId}>Number</label>
        <Field id={numberId} name="number" type="text" />
        <ErrorMessage name="number" component="span" style={{ color: "red" }} />

        <div className={s["button-wrapper"]}>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
