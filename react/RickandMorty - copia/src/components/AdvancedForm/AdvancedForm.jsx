import {  Form, Formik, useFormik } from "formik";
import { initialValues } from "./utils/form";
import { AdvancedFormSchema } from "./AdvancedFormSchema";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Checkbox from "../ui/Checkbox";


export default function AdvancedForm({onSubmit}) {

  const {
    values,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: AdvancedFormSchema, 
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AdvancedFormSchema}
      onSubmit={onSubmit}
    >
      
        <Form>
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
            value={values.username}
          />
          <Select
            label="Job type"
            name="jobType"
            placeholder="Please select a job"
            value={values.jobType}
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </Select>
          <Checkbox
           type="checkbox"
           name="acceptedTC"
           value={values.acceptedTC} />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
          <pre>{JSON.stringify({ values, errors }, null, 1)}</pre>
        </Form>
      
    </Formik>
  );
}
