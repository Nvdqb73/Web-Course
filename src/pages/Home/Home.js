import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('Banner')}></div>
            <div className={cx('Course')}></div>

            <h2>Home page</h2>
        </div>
    );
}

export default Home;
