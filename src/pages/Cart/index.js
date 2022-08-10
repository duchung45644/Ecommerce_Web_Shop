import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styles from './Cart.module.scss';
import productData from '~/assets/fake-data/products';
import priceFormat from '~/utils';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Cart() {
    const data = JSON.parse(localStorage.getItem('products')) ?? [];

    const [productsCart, setProductsCart] = useState(data);

    const totalPrice = productsCart.reduce((acc, product) => {
        return (acc += product.price * product.quantity);
    }, 0);

    const saveToLocalStorage = (data) => {
        const jsonData = JSON.stringify(data);
        localStorage.setItem('products', jsonData);
    };

    const updateQuantity = (type, index) => {
        if (type === 'plus') {
            setProductsCart((prev) => {
                prev[index].quantity += 1;

                // Save to localStorage
                saveToLocalStorage(prev);

                // Sử dụng spread để tạo mảng mới nếu không
                // thì useState sẽ coi nó là mảng cũ và nó không re-render
                return [...prev];
            });
        } else {
            setProductsCart((prev) => {
                prev[index].quantity = prev[index].quantity === 1 ? 1 : prev[index].quantity - 1;

                // Save to localStorage
                saveToLocalStorage(prev);

                return [...prev];
            });
        }
    };

    const deleteProduct = (index) => {
        productsCart.splice(index, 1);
        saveToLocalStorage(productsCart);
        setProductsCart([...productsCart]);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('cart')}>
                <div className={cx('cart-list')}>
                    <p className={cx('number-product')}>
                        Bạn đang có <span>{productsCart.length}</span> sản phẩm trong giỏ hàng
                    </p>
                    <ul>
                        {productsCart.map((item, index) => (
                            <li key={index}>
                                <img src={productData.getProductBySlug(item.slug).image01} alt="hehe" />
                                <div className={cx('cart-item-infor')}>
                                    <Link to={`/catalog/${item.slug}`} className={cx('title')}>
                                        {`${productData.getProductBySlug(item.slug).title} - ${item.color} - ${
                                            item.size
                                        }`}
                                    </Link>
                                    <span className={cx('price')}>{priceFormat(item.price)}</span>

                                    <div className={cx('quantity')}>
                                        <div
                                            className={cx('quantity-btn')}
                                            onClick={() => updateQuantity('minus', index)}
                                        >
                                            <FontAwesomeIcon icon={faMinus} />
                                        </div>
                                        <div className={cx('quantity-input')}>{item.quantity}</div>
                                        <div
                                            className={cx('quantity-btn')}
                                            onClick={() => updateQuantity('plus', index)}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </div>
                                    </div>
                                </div>

                                <Button className={cx('delete-btn')} onClick={() => deleteProduct(index)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={cx('cart-infor')}>
                    <div className={cx('txt-price')}>
                        <span>Thành tiền:</span>
                        <span>{priceFormat(totalPrice)}đ</span>
                    </div>
                    <div className={cx('infor-btn')}>
                        <Button large className={cx('bg-blue', 'btn')}>
                            Đặt hàng
                        </Button>
                        <Button large to="/catalog" className={cx('bg-blue', 'btn')}>
                            Tiếp tục mua hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
