import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

function Heading({
    type_h1,
    type_h2,
    type_h3,
    heading_h1 = false,
    heading_h2 = false,
    heading_h3 = false,
    children,
    ...passProps
}) {
    let Comp = 'h1';

    const props = {
        type_h1,
        ...passProps,
    };

    if (type_h2) {
        props.h2 = type_h2;
        Comp = 'h2';
    } else if (type_h3) {
        props.h3 = type_h3;
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
    type_h2: PropTypes.bool,
    type_h3: PropTypes.bool,
    heading_h1: PropTypes.bool,
    heading_h2: PropTypes.bool,
    heading_h3: PropTypes.bool,
    children: PropTypes.node,
};

export default Heading;
