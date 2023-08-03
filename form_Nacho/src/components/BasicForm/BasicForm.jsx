import { useState } from "react";
import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { initialValues } from "./utils/form";

async function onSubmit(values, actions) {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
}
export default function BasicForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: BasicFormSchema,
    onSubmit,
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          placeholder="Enter your email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="age">Age</label>
        <input
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          id="age"
          type="number"
          placeholder="Enter your age"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        <button
          onClick={() => setIsPasswordVisible((currentState) => !currentState)}
        >
          OJO
        </button>

        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
      <pre>{JSON.stringify({ values, errors }, null, 1)}</pre>
    </>
  );
}
