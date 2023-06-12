import classNames from 'classnames/bind';

import styles from './Learning.module.scss';
import Introduce from '~/components/common/Introduce';
import LearningPathsList from '~/components/feature/LearningPathsList';
import SuggestionBox from '~/components/common/SuggestionBox';

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
                <SuggestionBox
                    title="Tham gia cộng đồng học viên F8 trên Facebook"
                    content="Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé."
                    href="https://www.facebook.com/EmLaCuaAnh.1009"
                    btn_content="Tham gia nhóm"
                    target="_blank"
                />
            </div>
        </div>
    );
}

export default Learning;
