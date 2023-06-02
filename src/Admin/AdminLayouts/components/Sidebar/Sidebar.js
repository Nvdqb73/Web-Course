import classNames from 'classnames/bind';
import { IconBat, IconBooks, IconGhost2, IconCategory } from '@tabler/icons-react';
import { IconClubs, IconUserCog, IconBrandQq, IconSchool, IconBrush } from '@tabler/icons-react';

import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <>
            <div className={cx('app-lef')}>
                <button className={cx('close-menu')}></button>
                <div className={cx('app-logo')}>
                    <IconBat size={30} color="#fff" stroke={3} />
                    <span>Admin</span>
                </div>
                <ul className={cx('nav-list')}>
                    <li className={cx('nav-list-item', { active: true })}>
                        <Link to="/admin/@_type=courseType" className={cx('nav-list-link')}>
                            <IconCategory size={25} color="#3d7eff" stroke={1} markerStart="2" />
                            <span>Course Type Management</span>
                        </Link>
                    </li>

                    <li className={cx('nav-list-item', { active: true })}>
                        <Link to="/admin/@_type=course" className={cx('nav-list-link')}>
                            <IconBooks size={25} color="#3d7eff" stroke={1} markerStart="2" />
                            <span>Course Management</span>
                        </Link>
                    </li>

                    <li className={cx('nav-list-item', { active: true })}>
                        <Link to="/admin/@_type=assignments" className={cx('nav-list-link')}>
                            <IconBrush size={25} color="#3d7eff" stroke={1} markerStart="2" />
                            <span>Assignment management</span>
                        </Link>
                    </li>

                    <li className={cx('nav-list-item', { active: true })}>
                        <Link to="/admin/@_type=lesson" className={cx('nav-list-link')}>
                            <IconSchool size={25} color="#3d7eff" stroke={1} markerStart="2" />
                            <span>Lesson Management</span>
                        </Link>
                    </li>

                    <li className={cx('nav-list-item', { active: true })}>
                        <Link to="/admin/@_type=role" className={cx('nav-list-link')}>
                            <IconGhost2 size={25} color="#3d7eff" stroke={1} markerStart="2" />
                            <span>Role Management</span>
                        </Link>
                    </li>

                    <li className={cx('nav-list-item', { active: true })}>
                        <Link to="/admin/@_type=user" className={cx('nav-list-link')}>
                            <IconUserCog size={25} color="#3d7eff" stroke={1} markerStart="2" />
                            <span>User management</span>
                        </Link>
                    </li>

                    <li className={cx('nav-list-item', { active: true })}>
                        <Link to="/admin/@_type=lecturer" className={cx('nav-list-link')}>
                            <IconBrandQq size={25} color="#3d7eff" stroke={1} markerStart="2" />
                            <span>Lecturer Management</span>
                        </Link>
                    </li>

                    <li className={cx('nav-list-item', { active: true })}>
                        <Link to="/admin/@_type=childAdmin" className={cx('nav-list-link')}>
                            <IconClubs size={25} color="#3d7eff" stroke={1} markerStart="2" />
                            <span>Admin Manager</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
