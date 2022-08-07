import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Catalog.module.scss';
import RenderProductsCard from '~/components/RenderProductsCard';
import category from '~/assets/fake-data/category';
import colors from '~/assets/fake-data/product-color';
import size from '~/assets/fake-data/product-size';
import Button from '~/components/Button';
import CheckBox from '~/components/CheckBox';
import productData from '~/assets/fake-data/products';

const cx = classNames.bind(styles);

function Catalog() {
    document.title = 'Yolo - Sản phẩm';

    const initFilers = {
        category: [],
        color: [],
        size: [],
    };

    const productList = productData.getAllProducts();

    const [products, setProducts] = useState(productList);

    const [filter, setFilter] = useState(initFilers);

    const filterRef = useRef();

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case 'CATEGORY':
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] });
                    break;
                case 'COLOR':
                    setFilter({ ...filter, color: [...filter.color, item.color] });
                    break;
                case 'SIZE':
                    setFilter({ ...filter, size: [...filter.size, item.size] });
                    break;
                default:
            }
        } else {
            switch (type) {
                case 'CATEGORY':
                    const newCategory = filter.category.filter((e) => e !== item.categorySlug);
                    setFilter({ ...filter, category: newCategory });
                    break;
                case 'COLOR':
                    const newColor = filter.color.filter((e) => e !== item.color);
                    setFilter({ ...filter, color: newColor });
                    break;
                case 'SIZE':
                    const newSize = filter.size.filter((e) => e !== item.size);
                    setFilter({ ...filter, size: newSize });
                    break;
                default:
            }
        }
    };

    const updateProducts = useCallback(() => {
        let temp = productList;

        if (filter.category.length > 0) {
            temp = temp.filter((e) => filter.category.includes(e.categorySlug));
        }

        if (filter.color.length > 0) {
            temp = temp.filter((e) => e.colors.find((color) => filter.color.includes(color)));
        }

        if (filter.size.length > 0) {
            temp = temp.filter((e) => e.size.find((size) => filter.size.includes(size)));
        }

        setProducts(temp);
    }, [filter, productList]);

    useEffect(() => {
        updateProducts();
    }, [updateProducts]);

    const toggleFilter = () => filterRef.current.classList.toggle(cx('active'));

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('open-filter')} onClick={toggleFilter}>
                    <Button className="bg-blue">Bộ lọc</Button>
                </div>
                <div ref={filterRef} className={cx('filter')}>
                    <div className={cx('close-filter')} onClick={toggleFilter}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className={cx('widget')}>
                        <div className={cx('title')}>Danh mục sản phẩm</div>
                        <div className={cx('widget-content')}>
                            {category.map((item, index) => (
                                <div key={index} className={cx('widget-item')}>
                                    <CheckBox onChange={(input) => filterSelect('CATEGORY', input.checked, item)}>
                                        {item.display}
                                    </CheckBox>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cx('widget')}>
                        <div className={cx('title')}>Màu sắc</div>
                        <div className={cx('widget-content')}>
                            {colors.map((item, index) => (
                                <div key={index} className={cx('widget-item')}>
                                    <CheckBox onChange={(input) => filterSelect('COLOR', input.checked, item)}>
                                        {item.display}
                                    </CheckBox>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cx('widget')}>
                        <div className={cx('title')}>Kích cỡ</div>
                        <div className={cx('widget-content')}>
                            {size.map((item, index) => (
                                <div key={index} className={cx('widget-item')}>
                                    <CheckBox onChange={(input) => filterSelect('SIZE', input.checked, item)}>
                                        {item.display}
                                    </CheckBox>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button className="bg-blue">Xoá bộ lọc</Button>
                </div>

                <div className={cx('content')}>
                    <RenderProductsCard data={products} col={3} />
                </div>
            </div>
        </div>
    );
}

export default Catalog;
