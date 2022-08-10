import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button';
import priceFormat from '~/utils';
import styles from './ProductCard.module.scss';
import Modal from '../Modal';
import ProductView from '../ProductView';

const cx = classNames.bind(styles);

function ProductCard({ data }) {
    const [modalStatus, setModalStatus] = useState(false);

    // set modal status based on children
    const setModal = (props) => {
        setModalStatus(props);
    };

    return (
        <div className={cx('wrapper')}>
            {modalStatus && (
                <Modal setModal={setModal}>
                    <ProductView product={data} />
                </Modal>
            )}
            <Link to={`/catalog/${data.slug}`}>
                <div className={cx('detail-link')}>
                    <div className={cx('image')}>
                        <img className={cx('image-1')} src={data.image01} />
                        <img className={cx('image-2')} src={data.image02} />
                    </div>
                    <div className={cx('infor')}>
                        <p className={cx('title')}>{data.title}</p>
                        <div className={cx('price')}>
                            <span className={cx('new-price')}>{priceFormat(data.price)}đ</span>
                            <span className={cx('old-price')}>399,000đ</span>
                        </div>
                    </div>
                </div>
            </Link>
            <Button
                onClick={() => setModalStatus(true)}
                icon={<FontAwesomeIcon icon={faCartShopping} />}
                className={cx('bg-blue', 'card-btn')}
            >
                Chọn mua
            </Button>
        </div>
    );
}

export default ProductCard;
