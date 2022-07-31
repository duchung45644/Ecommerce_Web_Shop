import { useState } from 'react';
import { faCartShopping, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Banner({ data }) {
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
        setActiveSlide(index);
    };
    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {data.map((item, index) => {
                    return <BannerSliderItem key={index} item={item} active={index === activeSlide}></BannerSliderItem>;
                })}
                <div className={cx('slider-control')}>
                    <div className={cx('control-item')} onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className={cx('control-item')}>
                        <div className={cx('index')}>
                            {activeSlide + 1} / {data.length}
                        </div>
                    </div>
                    <div className={cx('control-item')} onClick={nextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function BannerSliderItem(props) {
    const data = props.item;
    return (
        <div
            className={cx('slider-item', {
                active: props.active,
            })}
        >
            <div className={cx('slider-item-infor')}>
                <div className={`color-${data.color}`}>
                    <h2>
                        <span>{data.title}</span>
                    </h2>
                </div>
                <div className={cx('slider-item-description')}>
                    <span>{data.description}</span>
                </div>
                <div className={cx('slider-item-btn')}>
                    <Button
                        to={data.path}
                        className={`bg-${data.color}`}
                        large
                        icon={<FontAwesomeIcon icon={faCartShopping} />}
                    >
                        Xem chi tiết!
                    </Button>
                </div>
            </div>
            <div className={cx('slider-item-image')}>
                <div className={cx('shape', `bg-${data.color}`)}></div>
                <img src={data.img} alt="ảnh thoi" />
            </div>
        </div>
    );
}

export default Banner;
