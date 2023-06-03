import classNames from 'classnames/bind';

import styles from './LearningPathsList.module.scss';
import Introduce from '../Introduce';
import Button from '../Button';
import Image from '../Image';

const cx = classNames.bind(styles);

function LearningPathItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <Introduce
                        heading_h2
                        h2
                        title="Lộ trình học Front-end"
                        content_body
                        content="Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé."
                    />
                </div>
                <div className={cx('thumb-wrap')}>
                    <Button className={cx('thumb-round')} href="/learning">
                        <Image
                            className={cx('thumb')}
                            src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                            alt="Lộ trình học Front-end"
                        />
                    </Button>
                </div>
            </div>
            {/* <div>
                Các khóa học 
            </div> */}
            <div>
                <Button primary href="/learning">
                    Xem chi tiết
                </Button>
            </div>
        </div>
    );
}

export default LearningPathItem;
