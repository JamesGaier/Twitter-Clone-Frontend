import React, { ReactElement } from 'react';
// import {
//     Features,
//     Footer,
//     LoginForm,
//     Signup
//  } from '../components/AuthPage';
import Features from '../components/HomePage/Features';
import Footer from '../components/HomePage/Footer';
import AuthForm from '../components/HomePage/AuthForm';
import AuthModal from '../components/global/AuthModal';
interface Props {

}

export default function HomePage(props: Props): ReactElement {
    return (
        <div className="home-page flex flex-col">
            <div className="home-container flex">
                <Features />
                <AuthForm />
            </div>
            <AuthModal />
            <Footer />
        </div>
    )
}
