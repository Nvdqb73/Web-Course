import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './SlideShow.module.scss';
import Image from '~/components/common/Image';

const cx = classNames.bind(styles);

function SlideShow() {
    var settings = {
        dots: true,

        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };
    return (
        <Slider {...settings}>
            <div className={cx('slide-item-1')}>
                <Image src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png" alt="slideshow" />
            </div>
            <div className={cx('slide-item-2')}>
                <Image src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png" alt="slideshow" />
            </div>
            <div className={cx('slide-item-3')}>
                <Image src="https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png" alt="slideshow" />
            </div>
        </Slider>
    );
}

export default SlideShow;
