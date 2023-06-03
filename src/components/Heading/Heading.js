import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

function Heading({ h1, h2, h3, heading_h1 = false, heading_h2 = false, heading_h3 = false, children, ...passProps }) {
    let Comp = 'h1';

    const props = {
        h1,
        ...passProps,
    };

    if (h2) {
        props.h2 = h2;
        Comp = 'h2';
    } else if (h3) {
        props.h3 = h3;
        Comp = 'h3';
    }

    const classes = cx('wrapper', {
        heading_h1,
        heading_h2,
        heading_h3,
    });
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

Heading.propTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
    h3: PropTypes.string,
    heading_h1: PropTypes.bool,
    heading_h2: PropTypes.bool,
    heading_h3: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Heading;
