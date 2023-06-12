import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import styles from './Lesson.module.scss';
import Video from '~/components/feature/Video';

const cx = classNames.bind(styles);

function Lesson() {
    const location = useLocation();
    const index = location.state.index;

    const [listLessons, setListLessons] = useState(location.state.listLessons);

    return (
        <>
            <div className={cx('wrapper')}>
                <Video listLessons={listLessons} index={index} />
            </div>
        </>
    );
}

export default Lesson;
