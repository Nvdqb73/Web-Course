import classNames from 'classnames/bind';
import { IconPlayerPlay, IconClipboardList, IconMovie, IconUsersGroup, IconBattery4 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

import styles from './CourseDetail.module.scss';
import Button from '~/components/common/Button';

const cx = classNames.bind(styles);

function CourseDetail({ ...props }) {
    const { dataKH, dataGV, listLessons } = props;
    const navigate = useNavigate();

    const handleLesson = (listLessons) => {
        navigate(`/lesson/${listLessons[0].maBH}`, { state: { listLessons: listLessons } });
    };

    return (
        <div className={cx('purchaseBadge')}>
            <div className={cx('imgPreview')}>
                <div
                    className={cx('bg')}
                    style={{
                        backgroundImage: `url("${dataKH.hinh}")`,
                    }}
                ></div>
                <div className={cx('overlay')}>
                    <IconPlayerPlay size={35} stroke={3} />
                </div>
                <p>Xem giới thiệu khóa học</p>
            </div>

            <h5>Miễn phí</h5>

            <Button primary medium onClick={() => handleLesson(listLessons)}>
                ĐĂNG KÝ HỌC
            </Button>

            <ul>
                <li>
                    <IconClipboardList className={cx('icon')} size={20} stroke={2} />
                    <span>Giang Viên {dataGV.tenGV}</span>
                </li>
                <li>
                    <IconMovie className={cx('icon')} size={20} stroke={2} />
                    <span>Tổng số {dataKH.soLuongBH} bài học</span>
                </li>
                <li>
                    <IconUsersGroup className={cx('icon')} size={20} stroke={2} />
                    <span>
                        Tổng số
                        <NumericFormat
                            className={cx('numberFormat')}
                            value={dataKH.soLuongHocVien}
                            thousandSeparator="./"
                        />
                        học viên
                    </span>
                </li>
                <li>
                    <IconBattery4 className={cx('icon')} size={20} stroke={2} />
                    <span>Học mọi lúc, mọi nơi</span>
                </li>
            </ul>
        </div>
    );
}

export default CourseDetail;
