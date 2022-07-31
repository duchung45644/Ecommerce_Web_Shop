import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '../Button';

import styles from './ProductCard.module.scss';
const cx = classNames.bind(styles);

function ProductCard({ data }) {
    return (
        <div className={cx('wrapper')}>
            {/*Sau nay dua onClick vao day nhe*/}
            <div className={cx('detail-link')}>
                <div className={cx('image')}>
                    <img className={cx('image-1')} src={data.image01} />
                    <img className={cx('image-2')} src={data.image02} />
                </div>
                <div className={cx('infor')}>
                    <p className={cx('title')}>{data.title}</p>
                    <div className={cx('price')}>
                        <span className={cx('new-price')}>{data.price}đ</span>
                        <span className={cx('old-price')}>399,000đ</span>
                    </div>
                </div>
            </div>
            <Button icon={<FontAwesomeIcon icon={faCartShopping} />} className={cx(`bg-blue`)}>
                Chọn mua
            </Button>
        </div>
    );
}

export default ProductCard;
