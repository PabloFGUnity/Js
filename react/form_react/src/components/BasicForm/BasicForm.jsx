import {useFormik} from 'formik';

function BasicForm() {
    const {values,errors, handleChange} = useFormik({
        initialValues:{
            email:"",
            age:"",
            password:"",
            confirmPassword:""
        },
    });
  return (
    <>
    <form>
            <label htmlFor='email'>Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                id='email'
                type='email'
                placeholder='Enter your email'/>
            
            <label htmlFor='age'>Age</label>
            <input
                value={values.age}
                onChange={handleChange}
                id='age'
                type='number'
                placeholder='Enter your age'/>

            <label htmlFor='password'>Password</label>
            <input
                value={values.password}
                onChange={handleChange}
                id='password'
                type='password'
                placeholder='Enter your password'/>

            <label htmlFor='ConfirmPassword'>Confirm Password</label>
            <input
                value={values.ConfirmPassword}
                onChange={handleChange}
                id='ConfirmPassword'
                type='password'
                placeholder='Confirm your Password'/>
    </form>
    <pre>{JSON.stringify({values, errors}, null, 1)}</pre>
    </>
  )
}

export default BasicForm
