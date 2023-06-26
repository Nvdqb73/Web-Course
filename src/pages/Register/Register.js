import { useState } from 'react';
import classNames from 'classnames/bind';
import { IconEyeClosed, IconEye } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useStore } from '~/hooks';
import { actions } from '~/store';
import styles from './Register.module.scss';
import Button from '~/components/common/Button/Button';
import Image from '~/components/common/Image/Image';
import SigninButton from '~/components/common/SigninButton';
import FormControl from '~/components/common/FormControl';

//Service
import * as userServices from '~/services/userServices';

const cx = classNames.bind(styles);

function Register() {
    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    const [currentLogin, setCurrentLogin] = useState(true);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const roleId = '2';
    const { name, image, userName, password, email } = state;

    const handleSaveUser = async () => {
        const result = await userServices.createUser(userName, password, name, email, image, roleId);
        if (result) {
            dispatch(actions.reset(''));
            navigate('/login');
            toast.success('Đăng ký thành công...!');
        } else {
            dispatch(actions.reset(''));
            toast.error('Đăng ký thất bại...!');
        }
    };

    let IconPassword = IconEyeClosed;

    let inputType = 'password';
    if (isShowPassword) {
        IconPassword = IconEye;
        inputType = 'text';
    }

    const handleShowForm = () => {
        setCurrentLogin(false);
    };

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
                                        value={name}
                                        labelTitle="Tên của bản"
                                        placeholder="Họ và tên của bạn"
                                        name="yourName"
                                        type="text"
                                        labelComeback
                                        dispatch={dispatch}
                                    />

                                    <FormControl
                                        value={userName}
                                        labelComeback
                                        labelTitle="Tên đăng nhâp"
                                        placeholder="Tên đăng nhập"
                                        name="userName_register"
                                        type="text"
                                        dispatch={dispatch}
                                    />

                                    <FormControl
                                        value={email}
                                        labelTitle="Email"
                                        placeholder="Địa chỉ email"
                                        name="email"
                                        type="text"
                                        setCurrentLogin={setCurrentLogin}
                                        dispatch={dispatch}
                                    />
                                    <div className={cx('inputPassword')}>
                                        <FormControl
                                            value={password}
                                            labelStyle
                                            placeholder="Mật khẩu"
                                            name="password_R"
                                            type={inputType}
                                            dispatch={dispatch}
                                        />

                                        <IconPassword
                                            className={cx('icon')}
                                            size={20}
                                            onClick={() => setIsShowPassword(!isShowPassword)}
                                        />
                                    </div>

                                    <Button
                                        className={
                                            name && userName && email && password ? cx('btnSubmit') : cx('btnDisabled')
                                        }
                                        disabled={name && userName && email && password ? false : true}
                                        onClick={() => handleSaveUser()}
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
