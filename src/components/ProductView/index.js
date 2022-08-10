import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductView.module.scss';
import Button from '~/components/Button';
import priceFormat from '~/utils';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductView({ product }) {
    const [mainImg, setMainImg] = useState();
    const [descBtn, setDescBtn] = useState(false);
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState();
    const descRef = useRef();
    const descMobileRef = useRef();
    let navitgate = useNavigate();

    const toggleDesc = () => {
        setDescBtn(!descBtn);
        descRef.current.classList.toggle(cx('expand'));
        descMobileRef.current.classList.toggle(cx('expand'));
    };

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };

    const check = () => {
        if (color === undefined) {
            alert('Hãy chọn màu sắc');
            return false;
        }

        if (size === undefined) {
            alert('Hãy chọn kích cỡ');
            return false;
        }

        return true;
    };

    const addToLocalStorage = (data) => {
        // Get products cart from localStorage
        const storageProducts = JSON.parse(localStorage.getItem('products')) ?? [];
        let duplicate = false;

        if (storageProducts.length === 0) {
            storageProducts.push(data);
        } else {
            for (let i = 0; i < storageProducts.length; i++) {
                const product = storageProducts[i];
                if (product.slug === data.slug && product.color === data.color && product.size === data.size) {
                    product.quantity += data.quantity;
                    duplicate = true;
                    break;
                }
            }

            if (!duplicate) {
                storageProducts.push(data);
            }
        }

        // Save to the localStorage
        const newProduct = JSON.stringify(storageProducts);
        localStorage.setItem('products', newProduct);
    };

    const addToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity,
            };

            if (newItem) {
                addToLocalStorage(newItem);

                alert('Đã thêm vào giỏ hàng');
            } else {
                alert('Thêm sản phẩm thất bại');
            }
        }
    };

    const goToCart = () => {
        if (check()) {
            let newItem = {
                slug: product.slug,
                color: color,
                size: size,
                price: product.price,
                quantity: quantity,
            };

            if (newItem) {
                addToLocalStorage(newItem);

                navitgate('/cart');
            } else {
                alert('Thêm sản phẩm thất bại');
            }
        }
    };

    useEffect(() => {
        setMainImg(product.image01);
        setColor(undefined);
        setSize(undefined);
        setQuantity(1);
    }, [product]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('images')}>
                    <div className={cx('images-list')}>
                        <img src={product.image01} onClick={() => setMainImg(product.image01)} alt="hehe" />
                        <img src={product.image02} onClick={() => setMainImg(product.image02)} alt="hehe" />
                    </div>
                    <div className={cx('main-image')}>
                        <img src={mainImg} alt="hehe" />
                    </div>
                    <div ref={descRef} className={cx('description')}>
                        <div className={cx('desc-title')}>Chi tiết sản phẩm</div>
                        <div
                            className={cx('desc-content')}
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        ></div>
                        <div className={cx('toggle-desc')}>
                            <Button className="bg-blue" onClick={toggleDesc}>
                                {descBtn ? 'Thu gọn' : 'Xem thêm'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx('infor')}>
                    <h2>{product.title}</h2>
                    <div className={cx('infor-item')}>
                        <div className={cx('item-price')}>{priceFormat(product.price)}đ</div>
                    </div>
                    <div className={cx('infor-item')}>
                        <div className={cx('item-title')}>Màu sắc</div>
                        <div className={cx('item-list')}>
                            {product.colors.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx(
                                        `bg-${item} circle`,
                                        'item-list-item',
                                        color === item ? cx('active') : '',
                                    )}
                                    onClick={() => setColor(item)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('infor-item')}>
                        <div className={cx('item-title')}>Kích cỡ</div>
                        <div className={cx('item-list')}>
                            {product.size.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx(`circle`, 'item-list-item', size === item ? cx('active') : '')}
                                    onClick={() => setSize(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('infor-item')}>
                        <div className={cx('item-title')}>Số lượng</div>
                        <div className={cx('item-quantity')}>
                            <div className={cx('quantity-btn')} onClick={() => updateQuantity('minus')}>
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                            <div className={cx('quantity-input')}>{quantity}</div>
                            <div className={cx('quantity-btn')} onClick={() => updateQuantity('plus')}>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('infor-item')}>
                        <div className={cx('item-list')}>
                            <Button large className="bg-blue" onClick={() => addToCart()}>
                                Thêm vào giỏ
                            </Button>
                            <Button large className="bg-blue" onClick={() => goToCart()}>
                                Mua ngay
                            </Button>
                        </div>
                    </div>
                </div>

                <div ref={descMobileRef} className={cx('description', 'mobile')}>
                    <div className={cx('desc-title')}>Chi tiết sản phẩm</div>
                    <div className={cx('desc-content')} dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <div className={cx('toggle-desc')}>
                        <Button className="bg-blue" onClick={toggleDesc}>
                            {descBtn ? 'Thu gọn' : 'Xem thêm'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
