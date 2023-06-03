import classNames from 'classnames/bind';

import style from './Course.module.scss';

const cx = classNames.bind(style);

function Course() {
    return (
        <div className={cx('wrapper')}>
            <h2>Course page</h2>
        </div>
    );
}

export default Course;
