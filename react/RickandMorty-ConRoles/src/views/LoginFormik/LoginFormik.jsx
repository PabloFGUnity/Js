import { Formik } from "formik";
import LoginFormikView from "./LoginFormikView";
import { LoginFormikSchema } from "./LoginFormikSchema";
import { initialValues } from "./utils/form";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginFormik() {
  const { login } = useAuthContext();

  function onSubmit(values, actions) {
    login(values);
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginFormikSchema}
      onSubmit={onSubmit}
    >
      {(props) => <LoginFormikView formik={props} />}
    </Formik>
  );
}
