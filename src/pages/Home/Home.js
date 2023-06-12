import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Courses from '~/components/common/Courses';
import SlideShow from '~/components/feature/SlideShow/SlideShow';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slideshow')}>
                <section className={cx('slideshow-wrapper')}>
                    <SlideShow />
                </section>
            </div>
            <div className={cx('Course')}>
                <Courses title="Khóa học miễn phí" />
            </div>
        </div>
    );
}

export default Home;
