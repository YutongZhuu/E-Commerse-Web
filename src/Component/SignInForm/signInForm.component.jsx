import './signInForm.styles.scss'
import { useState } from 'react'
import Input from "../Input/input.component"
import Button from "../Button/button.component"
import { SignInWithGooglePopup, createUserDocumentFromAuth, SignInAuthUserWithPasswordAndEmail } from "../../Utili/firebase.component"

const DefaultFormValue = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [FormValue, SetFormValue] = useState(DefaultFormValue)
    const { email, password } = FormValue

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        SetFormValue({ ...FormValue, [name]: value })
    }

    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup()
    }
    
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            const { user } = await SignInAuthUserWithPasswordAndEmail(email, password)
            SetFormValue(DefaultFormValue)
        } catch (error) {
            alert(`error: ${error}`)
        }
    }

    return (
        <div className="sign-in-form-container">
            <h2>HAVE AN ACCOUNT?</h2>
            <p>Sign in with email and password or gmail varification</p>
            <form onSubmit={onSubmitHandler}>
                <Input label='email' type='email' name='email' value={email} onChange={onChangeHandler} />
                <Input label='password' type='password' name='password' value={password} onChange={onChangeHandler} />
                <div className='button-container1'>
                    <Button type="submit" value="Submit" />
                    <Button type="button" ClassNAME="google-sign-in" value="Sign In With Google" onClick={logGoogleUser} />
                </div>
            </form>
        </div>
    )
}

export default SignInForm