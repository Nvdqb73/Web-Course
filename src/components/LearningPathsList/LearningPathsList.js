import classNames from 'classnames/bind';

import styles from './LearningPathsList.module.scss';
import LearningPathItem from './LearningPathItem';

const cx = classNames.bind(styles);

function LearningPathsList() {
    return (
        <div className={cx('content')}>
            <LearningPathItem />
            <LearningPathItem />
        </div>
    );
}

export default LearningPathsList;
