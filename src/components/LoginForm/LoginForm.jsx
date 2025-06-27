import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import styles from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();

  // const SignupSchema = Yup.object().shape({
  //   name: Yup.string().min(2, "Too Short!").required("Required"),
  //   email: Yup.string().email("Invalid email").required("Required"),
  //   password: Yup.string().min(6, "Min 6 simbols").required("Required"),
  // });

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        // validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className={styles.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.button}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
