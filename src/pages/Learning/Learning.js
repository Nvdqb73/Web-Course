import classNames from 'classnames/bind';

import styles from './Learning.module.scss';
import Introduce from '~/components/Introduce';
import LearningPathsList from '~/components/LearningPathsList';
import SuggestionBox from '~/components/SuggestionBox';

const cx = classNames.bind(styles);

function Learning() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-top')}>
                <Introduce
                    heading_h1
                    title="Lộ trình học"
                    content_top
                    content="Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí Lập trình viên Front-end bạn nên tập trung vào lộ trình Front-end."
                />
            </div>

            <div className={cx('container-body')}>
                <LearningPathsList />
                <SuggestionBox />
            </div>
        </div>
    );
}

export default Learning;
