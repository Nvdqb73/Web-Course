import classNames from 'classnames/bind';
import Container from 'react-bootstrap/Container';

import style from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header/Header';

const cx = classNames.bind(style);

function Admin({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar />
                <Container>
                    <Header />
                    <div className={cx('content')}>{children}</div>
                </Container>
            </div>
        </div>
    );
}

export default Admin;
