import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductView.module.scss';
import Button from '~/components/Button';
import priceFormat from '~/utils';

const cx = classNames.bind(styles);

function ProductView({ product }) {
    const [mainImg, setMainImg] = useState();
    const [descBtn, setDescBtn] = useState(false);
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState();
    const descRef = useRef();
    const descMobileRef = useRef();

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
                console.log(newItem);
                alert('Đã thêm vào giỏ hàng');
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
                        <img src={product.image01} onClick={() => setMainImg(product.image01)} />
                        <img src={product.image02} onClick={() => setMainImg(product.image02)} />
                    </div>
                    <div className={cx('main-image')}>
                        <img src={mainImg} />
                    </div>
                    <div ref={descRef} className={cx('description')}>
                        <div className={cx('desc-title')}>Chi tiết sản phẩm</div>
                        <div className={cx('desc-content')}>
                            <p>
                                Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa
                                khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo
                                thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục
                                hàng ngày!
                            </p>
                            <br />
                            <br />
                            <p>
                                Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo
                                thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn
                                giản của chúng. Càng đơn giản, bạn lại càng dễ mix &amp; match với những món đồ khác
                                nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo
                                cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc
                                của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản
                                từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa
                                chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên
                                mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó,
                                áo thun nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không
                                bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm
                                cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều
                                môi trường, ngay cả khi vận động{' '}
                            </p>
                            <br />
                            <br />
                            <p>
                                Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa
                                khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo
                                thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục
                                hàng ngày!
                            </p>
                            <br />
                            <br />
                            <p>
                                Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo
                                thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn
                                giản của chúng. Càng đơn giản, bạn lại càng dễ mix &amp; match với những món đồ khác
                                nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo
                                cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc
                                của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản
                                từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa
                                chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên
                                mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó,
                                áo thun nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không
                                bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm
                                cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều
                                môi trường, ngay cả khi vận động
                            </p>
                        </div>
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
                            <Button
                                large
                                className="bg-blue"
                                onClick={() => {
                                    check();
                                    addToCart();
                                }}
                            >
                                Thêm vào giỏ
                            </Button>
                            <Button large className="bg-blue">
                                Mua ngay
                            </Button>
                        </div>
                    </div>
                </div>

                <div ref={descMobileRef} className={cx('description', 'mobile')}>
                    <div className={cx('desc-title')}>Chi tiết sản phẩm</div>
                    <div className={cx('desc-content')}>
                        <p>
                            Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa
                            giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ
                            cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!
                        </p>
                        <br />
                        <br />
                        <p>
                            Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun
                            nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của
                            chúng. Càng đơn giản, bạn lại càng dễ mix &amp; match với những món đồ khác nhau.Áo thun nữ
                            PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu
                            kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ
                            tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến
                            bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được
                            xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái,
                            mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả
                            năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da
                            khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co
                            giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động{' '}
                        </p>
                        <br />
                        <br />
                        <p>
                            Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa
                            giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ
                            cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!
                        </p>
                        <br />
                        <br />
                        <p>
                            Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun
                            nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của
                            chúng. Càng đơn giản, bạn lại càng dễ mix &amp; match với những món đồ khác nhau.Áo thun nữ
                            PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu
                            kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ
                            tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến
                            bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được
                            xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái,
                            mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả
                            năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da
                            khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co
                            giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động
                        </p>
                    </div>
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
