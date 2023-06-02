import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import { IconBat, IconBellFilled } from '@tabler/icons-react';
import { IconUser, IconSettings, IconArrowBarRight } from '@tabler/icons-react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            icon: <IconUser size={15} color="#333" stroke={2} />,
            title: 'Trang cá nhân',
            to: './huhu',
        },
        {
            icon: <IconSettings size={15} color="#333" stroke={2} />,
            title: 'Cài đặt',
            to: './huhu',
        },
        {
            icon: <IconArrowBarRight size={15} color="#333" stroke={2} />,
            title: 'Đăng Xuất',
            to: './huhu',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('log-link')}>
                        <IconBat size={50} color="#333" stroke={2} />
                    </Link>
                    <span className={cx('title')}>Khóa học trực tuyến</span>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div>
                                <span>Khóa học của tôi</span>
                            </div>

                            <Tippy content="Hihi">
                                <button className={cx('action-btn')}>
                                    <IconBellFilled size={25} color="#707070" stroke={2} />
                                </button>
                            </Tippy>

                            <Menu items={userMenu}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/347399533_656272092982611_2534830518192133070_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AfAw1CgbrNoAX-aNPBi&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfAC4wvRMLLMRFGt3qMivLwAbcWlw9Qt2ZcrHA-vg4PjnA&oe=646E0CB8"
                                    alt="Nguyen văn A"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng Nhập</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
export default Header;
