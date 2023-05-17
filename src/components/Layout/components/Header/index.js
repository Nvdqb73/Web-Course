import classNames from 'classnames/bind';
import { IconBrand4chan, IconSearch } from '@tabler/icons-react';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <IconBrand4chan size={50} color="red" stroke={2} />
                    <span className={cx('title')}>Học Lập Trình Để Đi Làm</span>
                </div>

                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <IconSearch color="#8c8c8d" stroke={2} />
                    </button>
                    <input placeholder="Tìm kiếm khóa học, bài viết, video, ..." spellCheck={false} />
                </div>

                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}
export default Header;
