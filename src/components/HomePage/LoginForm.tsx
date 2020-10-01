import React, { ReactElement,  useState } from 'react';

interface Props {
}

export default function LoginForm(props: Props): ReactElement {
    const [emailPhone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form className="login-form flex justify-content-center">
                <div className="email-phone input-group flex flex-col">
                    <div className="gr">
                        <label className="form-label">Phone or email</label>
                    </div>
                    <input type="text" className="text-field" id="email-phone" onChange={e => setEmailPhone(e.target.value)}   value={emailPhone}
                    />
                </div>
                <div className="pwd input-group flex flex-col">
                    <div className="gr">
                        <label className="form-label">Password</label>
                    </div>
                    <input type="password" className="text-field" id="pwd" onChange={e => setPassword(e.target.value)}  value={password}/>
                    <a className="forgot" href="/#">Forgot password?</a>
                </div>
                <input type="submit" className="btn-o btn-margin" value="Log in"/>
        </form>
    )
}
