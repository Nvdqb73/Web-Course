import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Courses from '~/components/Courses';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('Banner')}>
                <h2> Banner</h2>
            </div>
            <div className={cx('Course')}>
                <Courses title="Khóa học miễn phí" />
            </div>
        </div>
    );
}

export default Home;
