import classNames from 'classnames/bind';

import styles from './Tracks.module.scss';
import TrackItem from '~/components/feature/TrackItem';

const cx = classNames.bind(styles);

function Tracks({ ...props }) {
    const { listLessons, setListLessons } = props;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <h2>Nội dung khóa học</h2>
                </header>
                <div className={cx('body')}>
                    <TrackItem listLessons={listLessons} setListLessons={setListLessons} />
                </div>
            </div>
        </div>
    );
}

export default Tracks;
