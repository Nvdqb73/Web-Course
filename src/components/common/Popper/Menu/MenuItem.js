import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Button from '~/components/common/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={(onClick = () => handleLogout())}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
