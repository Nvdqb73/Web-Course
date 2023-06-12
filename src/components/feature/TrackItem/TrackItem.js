import classNames from 'classnames/bind';
import { IconCircleCheckFilled, IconCircleCaretRight } from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom';

import styles from './TrackItem.module.scss';

const cx = classNames.bind(styles);

function TrackItem({ ...props }) {
    const navigate = useNavigate();

    const { listLessons, setListLessons } = props;

    const handleTransfer = (id) => {
        navigate(`/lesson/${id}`, { state: { index: id } });
    };

    return (
        <>
            {listLessons.map((lesson) => (
                <div className={cx('wrapper')} key={lesson.maBH} onClick={() => handleTransfer(lesson.maBH)}>
                    <div className={cx('info')}>
                        <h3 className={cx('title')}>{lesson.tenBH}</h3>
                        <p>
                            <IconCircleCaretRight size={18} color="rgba(240,81,35,.8)" />
                        </p>
                    </div>
                    <div className={cx('icon-box')}>
                        <IconCircleCheckFilled size={20} color="#5db85c" />
                    </div>
                </div>
            ))}
        </>
    );
}

export default TrackItem;
