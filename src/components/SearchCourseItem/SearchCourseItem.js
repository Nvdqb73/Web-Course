import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchCourseItem.module.scss';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';

const cx = classNames.bind(styles);
function SearchCourseItem({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <span className={cx('name')}>{data.nickname}</span>
        </Link>
    );
}

SearchCourseItem.propTypes = {
    data: PropTypes.object,
};

export default SearchCourseItem;
