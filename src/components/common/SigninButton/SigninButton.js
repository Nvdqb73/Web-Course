import classNames from 'classnames/bind';

import styles from './SigninButton.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function SigninButton() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('icon')}
                src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
                alt="Đăng nhâp với personal"
            />
            <span className={cx('title')}>Sử dụng tài khoản </span>
        </div>
    );
}

export default SigninButton;
