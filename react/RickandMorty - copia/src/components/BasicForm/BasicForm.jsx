import { useFormik } from "formik";
import { BasicFormSchema } from "./BasicFormSchema";
import { initialValues } from "./utils/form";



export default function BasicForm({onSubmit}) {
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
    < >
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
        
        <label htmlFor="password">Password</label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          type= "password"
          placeholder="Enter your password"
          
        />
        

        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
      <pre>{JSON.stringify({ values, errors }, null, 1)}</pre>
    </>
  )
}

