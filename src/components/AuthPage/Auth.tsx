import React, { ReactElement, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { setModalState } from '../../store/actions/auth';

interface Props {
}

export default function Auth(props: Props): ReactElement {
    const [emailPhone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSignup = () => {
        dispatch(setModalState(true));
    };
    return (
        <div className="auth flex flex-col align-items-center">
            <svg viewBox="0 0 24 24" className="twitter-icon md white fill"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
            <h3 className="fake-twitter-text">Log in to Fake Twitter</h3>
            <form className="twitter-auth-form flex flex-col">
                <div className="auth-group input-group-vert flex flex-col">
                    <div className="gr">
                        <label htmlFor="" className="form-label">Email or phone number</label>
                    </div>
                    <input type="text" className="text-field stretch white-bottom" name="email_phone" onChange={(e:ChangeEvent<HTMLInputElement>) => setEmailPhone(e.target.value)} value={emailPhone}/>
                </div>
                <div className="auth-group input-group-vert flex flex-col">
                    <div className="gr">
                        <label htmlFor="" className="form-label">Password</label>
                    </div>
                    <input type="password" className="text-field stretch white-bottom" name="password" onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password}/>
                </div>
                <input type="submit" className="submit-twitter-auth btn btn-wide" value="Log in"/>
                <div className="link forgot-signup flex justify-content-center">
                    <a href="/#" className="forgot link-text-bg">Forgot password? · </a>
                    <a href="/#" className="forgot link-text-bg" onClick={e => handleSignup()}> Sign up for Fake Twitter</a>
                </div>
            </form>
        </div>
    )
}
