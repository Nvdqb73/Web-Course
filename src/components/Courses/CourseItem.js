import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconUsersGroup } from '@tabler/icons-react';
import classNames from 'classnames/bind';
import styles from './Courses.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function CourseItem({ data }) {
    return (
        // eslint-disable-next-line
        <div className={cx('course-item')}>
            <Link
                className={cx('avatar')}
                to={`/${data.nickname}`}
                style={{
                    backgroundImage: `url("${data.avatar}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50%',
                    backgroundSize: 'cover',
                    borderRadius: '16px',
                    display: 'block',
                    objectFit: 'cover',
                    overFlow: 'hidden',
                    width: '241px',
                    height: '136px',
                    color: 'blue',
                }}
            >
                {/* <Button primary className={cx('btn-course')} to="course">
                    Xem Khóa học
                </Button> */}
            </Link>
            <h3 className={cx('course-name')}>
                <Button className={cx('link-name')} href="hadfas">
                    {data.nickname}
                </Button>
            </h3>
            <div className={cx('students-count')}>
                <IconUsersGroup size={15} color="#333" stroke={4} />
                <span className={cx('quantity')}>106.828</span>
            </div>
        </div>
    );
}

CourseItem.propTypes = {
    data: PropTypes.object,
};

export default CourseItem;
