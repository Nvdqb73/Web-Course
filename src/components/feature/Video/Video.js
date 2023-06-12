import classNames from 'classnames/bind';
import { IconSquareRoundedPlus } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

import styles from './Video.module.scss';
import VideoPlayer from '../VideoPlayer';
import Powered from '~/components/common/Powered';
import Heading from '~/components/common/Heading';

import * as lessonServices from '~/services/lessonServices';

const cx = classNames.bind(styles);

function Video({ ...props }) {
    const [lesson, setLesson] = useState({});

    const { listLessons, index } = props;
    const indexS = index ? index : listLessons[0].maBH;

    useEffect(() => {
        const fetchApi = async () => {
            const result = await lessonServices.lessonById(indexS);
            if (result) {
                setLesson(result);
            }
        };
        fetchApi();
    }, [indexS, listLessons]);

    return (
        <>
            <div className={cx('wrapper')}>
                <VideoPlayer data={lesson} />
            </div>

            <div className={cx('content')}>
                <div className={cx('contentTop')}>
                    <Heading heading_h1 h1="true">
                        {lesson.tenBH}
                    </Heading>
                    <button className={cx('addNote')}>
                        <IconSquareRoundedPlus size={20} strokeWidth={1} />
                        <span className={cx('label')}>
                            Thêm ghi chú tại
                            <span className={cx('num')}>00:10</span>
                        </span>
                    </button>
                </div>

                <p>{lesson.noiDungBH}</p>
            </div>
            <Powered />
        </>
    );
}

export default Video;
