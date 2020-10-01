import React, { ReactElement } from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';
interface Props {

}

export default function AuthForm(props: Props): ReactElement {
    return (
        <div className="auth-form">
            <div className="cont-auth container flex flex-col">
                <LoginForm />
                <Signup/>
            </div>
        </div>
    )
}
