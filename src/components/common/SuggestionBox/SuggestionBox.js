import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestionBox.module.scss';
import Introduce from '../Introduce';
import Button from '../Button';
import Image from '../Image';

const cx = classNames.bind(styles);

function SuggestionBox({ title, content, to, href, btn_content, ...passProps }) {
    const propsBtn = {
        to,
        href,
        ...passProps,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <Introduce heading_h1 type_h1 title={title} content_body content={content} />

                <Button className={cx('btn')} large outline {...propsBtn}>
                    {btn_content}
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

SuggestionBox.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
};
export default SuggestionBox;
