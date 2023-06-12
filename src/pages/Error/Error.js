import classNames from 'classnames/bind';

import styles from './Error.module.scss';

const cx = classNames.bind(styles);

function Error() {
    return (
        <div className={cx('wrapper')}>
            <h1>Not Found 404</h1>
        </div>
    );
}

export default Error;
