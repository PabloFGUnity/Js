import { Form, Formik } from "formik";
import { initialValues } from "./utils/form";
import { AdvancedFormSchema } from "./AdvancedFormSchema";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Checkbox from "../ui/Checkbox";

async function onSubmit(values, actions) {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
}

export default function AdvancedForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AdvancedFormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
          />
          <Select
            label="Job type"
            name="jobType"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </Select>
          <Checkbox type="checkbox" name="acceptedTC" />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
          <pre>{JSON.stringify({ values, errors }, null, 1)}</pre>
        </Form>
      )}
    </Formik>
  );
}
