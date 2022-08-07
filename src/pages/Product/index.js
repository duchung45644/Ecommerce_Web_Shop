import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import productData from '~/assets/fake-data/products';
import RenderProductsCard from '~/components/RenderProductsCard';
import ProductView from '~/components/ProductView';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product() {
    const { pathname } = useLocation();
    const slug = pathname.slice(9);

    const data = productData.getProductBySlug(slug);
    document.title = `Yolo - ${data.title}`;

    const [descBtn, setDescBtn] = useState(false);
    const descRef = useRef();

    const toggleDesc = () => {
        setDescBtn(!descBtn);
        descRef.current.classList.toggle(cx('expand'));
    };

    return (
        <div className={cx('wrapper')}>
            <ProductView product={data}></ProductView>
            <div className="section">
                <div className="section-title">Khám phá thêm</div>
                <div className="section-body">
                    <RenderProductsCard numberProduct={8} />
                </div>
            </div>
        </div>
    );
}

export default Product;
