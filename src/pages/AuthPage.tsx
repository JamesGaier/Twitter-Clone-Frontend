import React, { ReactElement } from 'react'

import Auth from '../components/AuthPage/Auth';
import AuthModal from '../components/global/AuthModal';
interface Props {

}

export default function AuthPage(props: Props): ReactElement {
    return (
        <div className="auth-page flex flex-col">
            <Auth />
            <AuthModal />
        </div>
    )
}
