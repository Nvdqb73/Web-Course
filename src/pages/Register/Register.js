import { useState } from 'react';
import classNames from 'classnames/bind';
import { IconEyeClosed, IconEye } from '@tabler/icons-react';

import styles from './Register.module.scss';
import Button from '~/components/common/Button/Button';
import Image from '~/components/common/Image/Image';
import SigninButton from '~/components/common/SigninButton';
import FormControl from '~/components/common/FormControl';

const cx = classNames.bind(styles);

function Register() {
    const [currentLogin, setCurrentLogin] = useState(true);
    const [yourName, setYourName] = useState('');
    const [userName_R, setUserName_R] = useState('');
    const [email_R, setEmail_R] = useState('');
    const [password_R, setPassword_R] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    let IconPassword = IconEyeClosed;
    let inputType = 'password';
    if (isShowPassword) {
        IconPassword = IconEye;
        inputType = 'text';
    }

    const handleShowForm = () => {
        setCurrentLogin(false);
    };

    console.log('yourName', yourName);
    console.log('userName', userName_R);
    console.log('email', email_R);
    console.log('password_r', password_R);
    return (
        <div className={cx('wrapper', 'hasBg')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <Button href="http://localhost:3003/">
                            <Image
                                className={cx('logo')}
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bat' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M17 16c.74 -2.286 2.778 -3.762 5 -3c-.173 -2.595 .13 -5.314 -2 -7.5c-1.708 2.648 -3.358 2.557 -5 2.5v-4l-3 2l-3 -2v4c-1.642 .057 -3.292 .148 -5 -2.5c-2.13 2.186 -1.827 4.905 -2 7.5c2.222 -.762 4.26 .714 5 3c2.593 0 3.889 .952 5 4c1.111 -3.048 2.407 -4 5 -4z' /%3E%3Cpath d='M9 8a3 3 0 0 0 6 0' /%3E%3C/svg%3E"
                                alt="web khóa học"
                            />
                        </Button>

                        <h1 className={cx('title')}>Đăng ký tài khoản</h1>
                    </div>
                    <div className={cx('body')}>
                        {currentLogin ? (
                            <div className={cx('mainStep')} onClick={() => handleShowForm()}>
                                <SigninButton />
                            </div>
                        ) : (
                            <>
                                <div className={cx('formBody')}>
                                    <FormControl
                                        labelTitle="Tên của bản"
                                        placeholder="Họ và tên của bạn"
                                        name="yourName"
                                        type="text"
                                        labelComeback
                                        setYourName={setYourName}
                                    />

                                    <FormControl
                                        labelComeback
                                        labelTitle="Tên đăng nhâp"
                                        placeholder="Tên đăng nhập"
                                        name="userName_register"
                                        type="text"
                                        setUserName_R={setUserName_R}
                                    />

                                    <FormControl
                                        labelTitle="Email"
                                        placeholder="Địa chỉ email"
                                        name="email"
                                        type="text"
                                        setCurrentLogin={setCurrentLogin}
                                        setEmail_R={setEmail_R}
                                    />
                                    <div className={cx('inputPassword')}>
                                        <FormControl
                                            labelStyle
                                            placeholder="Mật khẩu"
                                            name="password_R"
                                            type={inputType}
                                            setPassword_R={setPassword_R}
                                        />

                                        <IconPassword
                                            className={cx('icon')}
                                            size={20}
                                            onClick={() => setIsShowPassword(!isShowPassword)}
                                        />
                                    </div>

                                    <Button
                                        className={
                                            yourName && userName_R && email_R && password_R
                                                ? cx('btnSubmit')
                                                : cx('btnDisabled')
                                        }
                                        disabled={yourName && userName_R && email_R && password_R ? false : true}
                                    >
                                        Đăng ký
                                    </Button>
                                </div>
                            </>
                        )}
                        <p className={cx('dontHaveAcc')}>
                            Bạn chưa có tài khoản?
                            <a href="/login">Đăng nhập</a>
                        </p>
                        {currentLogin ? (
                            <div className={cx('displayNone')}></div>
                        ) : (
                            <p className={cx('forgotPassword')}>Quên mật khẩu?</p>
                        )}
                    </div>
                    <div className={cx('footer')}>
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
                        <a href="http://localhost:3003/terms">Điều khoản sử dụng</a>
                        của chúng tôi.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
