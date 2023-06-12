import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Introduce.module.scss';
import Heading from '../Heading';

const cx = classNames.bind(styles);

function Introduce({
    title,
    content,
    type_h2,
    type_h3,
    heading_h1 = false,
    heading_h2 = false,
    heading_h3 = false,
    content_top = false,
    content_body = false,
}) {
    const props = {
        type_h2,
        type_h3,
        heading_h1,
        heading_h2,
        heading_h3,
    };
    const classes = cx('container', {
        content_top,
        content_body,
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading-wrapper')}>
                <Heading {...props}>{title}</Heading>
            </div>
            <div className={classes}>
                <p>{content}</p>
            </div>
        </div>
    );
}

Introduce.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    heading_h1: PropTypes.bool,
    heading_h2: PropTypes.bool,
    heading_h3: PropTypes.bool,
    container_top: PropTypes.bool,
    container_body: PropTypes.bool,
};

export default Introduce;
