import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import Header from '~/layouts/components/Header';
import styles from './LessonLayout.module.scss';
import Tracks from '../components/Tracks';

const cx = classNames.bind(styles);

function LessonLayout({ children }) {
    const location = useLocation();

    const [listLessons, setListLessons] = useState(location.state.listLessons);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Tracks listLessons={listLessons} setListLessons={setListLessons} />
        </div>
    );
}
LessonLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LessonLayout;
