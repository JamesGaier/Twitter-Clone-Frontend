import React, { ReactElement, Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../store';
import TwitterIcon from '../global/TwitterIcon';
import Textfield from '../global/Textfield';
import Button from '../global/Button';
interface Props {
    open: boolean
}

const AuthModal = (props: Props): ReactElement => {
    const months: Array<string> =
            ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    const [curMonth, setMonth] = useState('');
    const [day, setDay] = useState('1');
    const [year, setYear] = useState('2000');
    const numDays = new Date(parseInt(year), months.indexOf(curMonth), 0).getDate();
    return (
        <Fragment>
            {
                props.open &&
                <div className="auth-modal-background pos-abs flex justify-content-center align-items-center">
                    <div className="auth-modal">
                        <div className="modal-icon flex justify-content-center">
                            <TwitterIcon
                                size="icon-md" />
                        </div>
                        <form className="modal-form">
                            <div className="container flex flex-col">
                                <div className="create-account">
                                    <h2 className="title-create-account">Create Your Account</h2>
                                    <div className="space flex flex-col">
                                        <Textfield
                                            type="text"
                                            label="Name" />
                                    </div>
                                    <div className="space space-bottom flex flex-col">
                                        <Textfield
                                            type="text"
                                            label="Phone" />
                                    </div>
                                    <a href="/#" className="forgot">Use email instead</a>
                                </div>
                                <div className="dob">
                                    <h4 className="space-bottom">Date of Birth</h4>
                                    <select name="month" id="" onChange={e => setMonth(e.target.value)} className="select-field select-field-md space-right space-bottom-2">
                                        {
                                            months.map((month:string) => {
                                                return <option value={month} className="option">{month}</option>;
                                            })
                                        }
                                    </select>
                                    <select name="day" id="" className="select-field select-field-sm space-right space-bottom-2">
                                    {
                                        [...Array(numDays).keys()]
                                                .map((x:number) => x+1)
                                                .map((day:number) => {
                                                    return <option value={day} className="option">{day}</option>
                                                })

                                    }
                                    </select>
                                    <select name="year" id="" onChange={e => setYear(e.target.value)} className="select-field select-field-sm space-bottom-3">
                                        {
                                            [...Array(121).keys()]
                                                .map((x:number) => 2020-x)
                                                .map((year:number) => {
                                                    return <option value={year} className="option">{year}</option>;
                                                })
                                        }
                                    </select>
                                </div>
                                <Button
                                    type="btn btn-lg"
                                    text="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </Fragment>
    );
};
export default connect((store: RootState) => ({open: store.auth.modalOpen}))(AuthModal);
