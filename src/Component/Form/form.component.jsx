import './form.styles.scss'
import { useState } from "react"
import Input from "../Input/input.component"
import Button from '../Button/button.component'
import { CreateAuthUserWithPasswordAndEmail, createUserDocumentFromAuth } from "../../Utili/firebase.component"

const DefaultFormValue = {
    displayname: '',
    email: '',
    password: '',
    confirmed_password: ''
}

const Form = () => {
    const [FormValue, SetFormValue] = useState(DefaultFormValue)
    const { displayname, email, password, confirmed_password } = FormValue

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        SetFormValue({ ...FormValue, [name]: value })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if (password !== confirmed_password) {
            alert('Your Password Do Not Match')
            return
        }

        try {
            const { user } = await CreateAuthUserWithPasswordAndEmail(email, password)
            await createUserDocumentFromAuth(user, { displayname })
            SetFormValue(DefaultFormValue)
        } catch (error) {
            alert(`error: ${error}`)
        }

    }

    return (
        <div className="sign-up-form-container">
            <h2>DO NOT HAVE AN ACCOUNT?</h2>
            <p>Sign up with your email and password</p>
            <form onSubmit={onSubmitHandler}>
                <Input label="Username" type='text' name='displayname' value={displayname} onChange={onChangeHandler} />
                <Input label="Email" type='email' name='email' value={email} onChange={onChangeHandler} />
                <Input label="Password" type='password' name='password' value={password} onChange={onChangeHandler} />
                <Input label="Confirm Password" type='password' name='confirmed_password' value={confirmed_password} onChange={onChangeHandler} />
                <Button value="Submit" type="submit"></Button>
            </form>
        </div>
    )
}

export default Form