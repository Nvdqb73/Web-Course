import classNames from 'classnames/bind';

import styles from './SuggestionBox.module.scss';
import Introduce from '../Introduce';
import Button from '../Button';
import Image from '../Image';

const cx = classNames.bind(styles);

function SuggestionBox() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <Introduce
                    heading_h1
                    h1
                    title="Tham gia cộng đồng học viên F8 trên Facebook"
                    content_body
                    content="Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé."
                />

                <Button
                    className={cx('btn')}
                    large
                    outline
                    href="https://www.facebook.com/EmLaCuaAnh.1009"
                    target="_blank"
                >
                    Tham gia nhóm
                </Button>
            </div>
            <div className={cx('image')}>
                <Image
                    className={cx('image-item')}
                    src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
                    alt="Học lập trình web"
                />
            </div>
        </div>
    );
}

export default SuggestionBox;
