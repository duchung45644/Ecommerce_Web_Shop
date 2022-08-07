import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './RenderProductsCard.module.scss';
import ProductCard from '~/components/ProductCard';
import productData from '~/assets/fake-data/products';

const cx = classNames.bind(styles);

function RenderProductsCard({ data, numberProduct, all, slug, cartItems, col }) {
    if (numberProduct) {
        data = productData.getProducts(numberProduct);
    } else if (all) {
        data = productData.getAllProducts();
    } else if (slug) {
        data = [productData.getProductBySlug(slug)];
    }

    if (!col) {
        col = 4;
    }

    return (
        <div className={cx('wrapper', 'grid', `col-${col}`, 'col-md-2', 'col-sm-1')}>
            {data.map((item, index) => (
                <ProductCard key={index} data={item} />
            ))}
        </div>
    );
}

// propTypes để ràng buộc dữ liệu
RenderProductsCard.propTypes = {
    data: PropTypes.array,
    numberProduct: PropTypes.number,
    slug: PropTypes.string,
};

export default RenderProductsCard;
