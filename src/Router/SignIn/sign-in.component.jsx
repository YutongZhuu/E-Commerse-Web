import './sign-in.styles.scss'
import Form from "../../Component/Form/form.component"
import SignInForm from "../../Component/SignInForm/signInForm.component"


const SignIn = () => {
    return (
        <div className='form-container'>            
            <SignInForm />
            <Form />
        </div>
    )
}
export default SignIn