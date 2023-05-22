import classNames from 'classnames/bind';
import { IconHome2, IconRoad, IconBulb } from '@tabler/icons-react';

import Menu, { MenuItem } from './Menu';

import config from '~/config/index';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<IconHome2 size={20} color="#333" stroke={2} />} />
                <MenuItem
                    title="Lộ trình"
                    to={config.routes.learning}
                    icon={<IconRoad size={20} color="#333" stroke={2} />}
                />
                <MenuItem title="Học" to={config.routes.course} icon={<IconBulb size={20} color="#333" stroke={2} />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
