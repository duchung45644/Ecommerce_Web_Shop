import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import midBanner from '~/assets/images/banner.png';

import Banner from '~/components/Banner';
import bannerSlider from '~/assets/fake-data/banner-slider';
import Policy from '~/components/Policy';
import policy from '~/assets/fake-data/policy';

import RenderProductsCard from '~/components/RenderProductsCard';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner className={cx('banner-slider')} data={bannerSlider}></Banner>

            {/* Policy */}
            <div className="section">
                <Policy data={policy} />
            </div>

            {/* Top seller section */}

            <div className="section">
                <div className="section-title">Top sản phẩm bán chạy trong tuần</div>
                <div className="section-body">
                    <RenderProductsCard numberProduct={4} />
                </div>
            </div>

            {/* New products section */}
            <div className="section">
                <div className="section-title">Sản phẩm mới</div>
                <div className="section-body">
                    <RenderProductsCard numberProduct={8} />
                </div>
            </div>

            {/* Middle banner */}
            <div className="section">
                <div className="section__body">
                    <Link to="/catalog" className={cx('midBanner')}>
                        <img src={midBanner} alt="ha" />
                    </Link>
                </div>
            </div>

            {/* Popular products section */}
            <div className="section">
                <div className="section-title">Phổ biến</div>
                <div className="section-body">
                    <RenderProductsCard numberProduct={12} />
                </div>
            </div>
        </div>
    );
}

export default Home;
