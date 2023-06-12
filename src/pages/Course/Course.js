import classNames from 'classnames/bind';

import style from './Course.module.scss';
import Introduce from '~/components/common/Introduce';
import Courses from '~/components/common/Courses';
import SuggestionBox from '~/components/common/SuggestionBox';

const cx = classNames.bind(style);

function Course() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-top')}>
                <Introduce
                    heading_h1
                    title="Khóa học"
                    content_top
                    content="Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu."
                />
            </div>

            <div className={cx('container-body')}>
                <Courses title="Khóa học miễn phí" />
                <SuggestionBox
                    title="Bạn đang tìm kiếm lộ trình học cho người mới?"
                    content="Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu."
                    to="/learning"
                    btn_content="Xem lộ trình"
                    target="_self"
                />
            </div>
        </div>
    );
}

export default Course;
