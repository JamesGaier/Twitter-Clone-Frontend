import React, { ReactElement } from 'react'

interface Props {

}

export default function Footer(props: Props): ReactElement {
    return (
        <nav className="footer-nav dark-blue flex justify-content-center">
            <ul className="footer-list list-style-none max-w flex flex-wrap align-items-center justify-content-center">
                <li className="footer-el">
                    <a href="/#" className="nav-link">About</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Help Center</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Terms</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Privacy Policy</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Cookies</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Ads info</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Blog</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Status</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Jobs</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Brand</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Advertise</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Marketing</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Business</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Developers</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Directory</a>
                </li>
                <li className="footer-el">
                    <a href="/#" className="nav-link">Settings</a>
                </li>
                <li className="footer-el">
                    <p>© 2020 Fake Twitter</p>
                </li>
            </ul>
        </nav>
    )
}
