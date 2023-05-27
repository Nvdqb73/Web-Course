import classNames from 'classnames/bind';
import Container from 'react-bootstrap/Container';

import style from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(style);

function Admin({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <Container>
                    <div className={cx('content')}>{children}</div>
                </Container>
            </div>
        </div>
    );
}

export default Admin;
