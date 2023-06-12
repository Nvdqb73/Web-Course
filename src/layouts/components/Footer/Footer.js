import classNames from 'classnames/bind';
import { IconBat } from '@tabler/icons-react';

import styles from './Footer.module.scss';
import Button from '~/components/common/Button';
import Heading from '~/components/common/Heading';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className={cx('column')}>
                        <div>
                            <div className={cx('column-top')}>
                                <Button primary href="/">
                                    <IconBat size={30} color="#333" stroke={3} />
                                </Button>
                                <Heading heading_h2 h2 className={cx('top-slogan')}>
                                    Khóa học trực tuyến
                                </Heading>
                            </div>
                            <p className={cx('contact-list')}>
                                Điện thoại: <a href="tel:0816.788.644">0816.788.644</a>
                                <br />
                                Email: <a href="mailto:nvdqb73@gmail.com">nvdqb73@gmail.com</a>
                                <br />
                                Địa chỉ: 176/47A Khu phố 5 Đường Huỳnh Tấn Phát, Thị Trấn Nhà Bè
                            </p>
                        </div>
                    </div>
                    <div className={cx('column')}>
                        <div>
                            <Heading className={cx('heading')} h2 heading_h2>
                                Về khóa học
                            </Heading>
                            <ul className={cx('list-1')}>
                                <li>
                                    <a href="/">Giới thiệu</a>
                                </li>

                                <li>
                                    <a href="/">Liên hệ</a>
                                </li>

                                <li>
                                    <a href="/">Điều khoản</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('column')}>
                        <div>
                            <Heading className={cx('heading')} h2 heading_h2>
                                Sản phẩm
                            </Heading>
                            <ul className={cx('list-2')}>
                                <li>
                                    <a href="/">Game Nester</a>
                                </li>

                                <li>
                                    <a href="/">Game CSS Diner</a>
                                </li>

                                <li>
                                    <a href="/">Game CSS Selectors</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={cx('column')}>
                        <div>
                            <Heading className={cx('heading')} h2 heading_h2>
                                Công ty cổ phẩn công nghệ giáo dục
                            </Heading>
                            <ul className={cx('list-3')}>
                                <li>
                                    <a href="/">Ngày thành lập: 6/5/2023</a>
                                </li>

                                <li>
                                    Lĩnh vực: Công nghệ, giáo dục, lập trình. chúng tôi xây dựng và phát triển những sản
                                    phẩm mang lại giá trị cho cộng đồng.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
