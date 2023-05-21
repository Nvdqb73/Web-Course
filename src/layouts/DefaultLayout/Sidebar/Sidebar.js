import classNames from 'classnames/bind';
import { IconHome2, IconRoad, IconBulb } from '@tabler/icons-react';

import config from '~/config/index';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <ul className={cx('sidebar-ul')}>
                <li className={cx('sidebar-li')}>
                    <Button
                        to={config.routes.home}
                        className={cx('sidebar-item')}
                        leftIcon={<IconHome2 color="#333" size={20} stroke={3} />}
                    >
                        Home
                    </Button>
                </li>
                <li className={cx('sidebar-li')}>
                    <Button
                        to={config.routes.learning}
                        className={cx('sidebar-item')}
                        leftIcon={<IconRoad color="#333" size={20} stroke={3} />}
                    >
                        Lộ trình
                    </Button>
                </li>
                <li className={cx('sidebar-li')}>
                    <Button
                        to={config.routes.course}
                        className={cx('sidebar-item')}
                        leftIcon={<IconBulb color="#333" size={20} stroke={3} />}
                    >
                        Học
                    </Button>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
