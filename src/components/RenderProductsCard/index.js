import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './RenderProductsCard.module.scss';
import ProductCard from '~/components/ProductCard';
import productData from '~/assets/fake-data/products';

const cx = classNames.bind(styles);

function RenderProductsCard({ numberProduct }) {
    let data = productData.getProducts(numberProduct);

    return (
        <div className={cx('wrapper', 'grid', 'col-4', 'col-md-2', 'col-sm-1')}>
            {data.map((item, index) => (
                <ProductCard key={index} data={item} />
            ))}
        </div>
    );
}

// propTypes để ràng buộc dữ liệu
RenderProductsCard.propTypes = {
    numberProduct: PropTypes.number.isRequired,
};

export default RenderProductsCard;
